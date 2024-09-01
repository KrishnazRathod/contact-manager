import asyncHandler from "express-async-handler";
import Contacts from "../../models/contactModel.js";

export const getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find();
  if (contacts) {
    res.status(200).json(contacts);
  } else {
    res.status(404);
    throw new Error("no contact found");
  }
});

export const getContact = asyncHandler(async (req, res) => {
  console.log("req:", req.params.id);
  const contact = await Contacts.findById(req.params.id);
  console.log("contact:", contact);
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404);
    throw new Error("contact not found");
  }
});

export const createContact = asyncHandler(async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  } else {
    const contact = await Contacts.create({
      name,
      phone,
    });
    res.status(200).json(contact);
  }
});

export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contacts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404);
    throw new Error("contact not found");
  }
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contacts.deleteOne({ _id: req.params.id });
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404);
    throw new Error("contact not found");
  }
});
