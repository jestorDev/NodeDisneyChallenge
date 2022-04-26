import { Router } from "express";

import {
    loginPostAccess,
    registerPostCreate
} from "../controllers/user.controller.mjs";


const router = Router()

router.post("/auth/login",  loginPostAccess)
router.post("/auth/register",registerPostCreate)

export default router
