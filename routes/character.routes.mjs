import { Router } from "express";


const router =  Router()

router.get("/characters" , (req  , res) => {
    res.send("/characters endopoint");
})



export default router
