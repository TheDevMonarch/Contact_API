import { Contact } from "../Models/Contact.js";

//get all contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();
  if (!userContact) {
    return res.json({ message: "No Contact Exist", success: false });
  }

  res.json({ message: "All contact fetched", userContact });
};

//Create new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name === "" || email === "" || phone === "" || type === "") {
    return res.json("all fields are required");
  }

  let saveContact = await Contact.create({
    name: name,
    email: email,
    phone: phone,
    type: type,
    user:req.user
  });

  res.json({ message: "Contact saved successfully", success: true });
};

//Update Contact
export const updateContact = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );

  if (!updatedContact) {
    res.json({ message: "No contact exist", success: false });
  }

  res.json({
    message: "contact updated successfully...!",
    updatedContact,
    success: true,
  });
};

//get contact by id
export const getContactById = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);
  if (!userContact) {
    return res.json({ message: "No Contact find", success: false });
  }

  res.json({ message: "Contact Fetched", userContact, success: true });
};

//delete contact by id
export const deleteContactById = async (req, res) => {
  const id = req.params.id;
  const deleteContact = await Contact.findByIdAndDelete(id);

  if (!deleteContact) {
    res.json({ message: "No contact exist", success: false });
  }

  res.json({
    message: "contact deleted successfully...!",
    success: true,
  });
};

//get contact by user id
export const getContactByUserId = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.find({user:id});
  if (!userContact) {
    return res.json({ message: "No Contact find", success: false });
  }

  res.json({ message: "User Specific Contact Fetched", userContact, success: true });
};