import { Router } from "express";


import { getCharacters,
    getDetailsCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter } from "../controllers/character.controller.mjs";

const router =  Router()

router.get("/characters" , (req  , res) => {

    res.send(getCharacters(req.query));
})

router.get("/characters/:characterId" , (req  , res) => {
    // details of particular character
    res.send(
        getDetailsCharacter(req.params.characterId)
    );
})


router.post("/characters" ,  (req  , res) => {
    //Create character
    res.send(
        createCharacter(req.body)
    );
})


router.put("/characters/:characterId" ,  (req  , res) => {
    //Update character
    res.send(
        updateCharacter(req.params.characterId, req.body)
    );
})

router.delete("/characters/:characterId" ,  (req  , res) => {
    //Delete character

    res.send(deleteCharacter(req.params.characterId));
})


export default router
