import express from 'express'
import { register, login } from '../Controllers/user.js';

const router = express.Router()

// user register route
// @api dsc :- user register
// @api method :- post
// @api endPoint :- /api/user/register
router.post("/register", register);


// user login route
// @api dsc :- user login
// @api method :- post
// @api endPoint :- /api/user/login
router.post("/login", login);



export default router