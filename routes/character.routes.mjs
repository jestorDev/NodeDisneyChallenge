import { Router } from "express";

import { charactersGet,
    charactersGetbyId,
    charactersPostCreate,
    charactersPutUpdate,
    characterDelete } from "../controllers/character.controller.mjs";

const router =  Router()

router.get("/characters" , charactersGet)

router.get("/characters/:characterId" , charactersGetbyId)

router.post("/characters" , charactersPostCreate )


router.put("/characters/:characterId" , charactersPutUpdate)

router.delete("/characters/:characterId" ,characterDelete )


export default router
