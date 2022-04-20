import { Router } from "express";

import {
    loginPostAccess,
    registerPostCreate
} from "../controllers/user.controller.mjs";


const router = Router()

router.post("/auth/login", registerPostCreate)
router.post("/auth/register", loginPostAccess)

export default router
