

import { Router } from "express";





const router = Router()

router.get("/view" ,(req, res) => { res.send ("Accessed "  +"/view" )  } )
router.get("/view/register" ,(req, res) => { res.send ("Accessed "  + "/view/register" ) })
router.get("/view/login" ,(req, res) => { res.send ("Accessed "  + "/view/login" ) })
router.get("/view/characters" ,(req, res) => { res.send ("Accessed "  + "/view/characters" ) })
router.get("/view/movies" ,(req, res) => { res.send ("Accessed "  + "/view/movies" ) })

export default router