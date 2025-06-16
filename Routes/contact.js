import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContact,
} from "../Controllers/contact.js";
import { isAuthenticated } from "../middlewares/Auth.js";


const router = express.Router();

// new contacct route
// @api dsc :- creating contact
// @api method :- post
// @api endPoint :- /api/contact/new
router.post("/new", isAuthenticated, newContact);

//get All contact
router.get("/", getAllContact);

//get contact by id
router.get("/:id", getContactById);

//update contact by id
router.put("/:id", isAuthenticated, updateContact)

//delete contact by id
router.delete("/:id", isAuthenticated, deleteContactById)

//get contact by userId
router.get('/userid/:id', getContactByUserId)

export default router;
