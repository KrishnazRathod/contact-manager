import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(404);
    throw new Error("all fields are mandetory");
  } else {
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(404);
      throw new Error("user already registered");
    }

    const hashPossword = await bcrypt.hash(password, 10);
    console.log("hashPossword:", hashPossword);
    const user = User.create({
      username,
      email,
      password: hashPossword,
    });
    if (user) {
      res.status(201).json({ _id: (await user).id, email: (await user).email });
    } else {
      res.status(404);
      throw new Error("User data is invalid");
    }
  }
});

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("all fields are mandetory");
  } else {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "10m",
        }
      );
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(401);
      throw new Error("password or email is not valid");
    }
  }
});

export const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
