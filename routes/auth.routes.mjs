import { Router } from "express";

import { 
    loginPostAccess,
    registerPostCreate,
    authForm
     } from "../controllers/user.controller.mjs";


router.post("/auth/login" , registerPostCreate )
router.post("/auth/register" , loginPostAccess )

export default router
