import mongoose from "mongoose";
import { ContactSchema } from "../models/restModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
