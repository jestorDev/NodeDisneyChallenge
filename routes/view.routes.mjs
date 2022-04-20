

import { Router } from "express";

import  {
    viewGet,
    viewAuthGet,
    viewCharactersGet,
    viewMoviesGet
} from "../controllers/movie.controller.mjs";




const router = Router()

router.get("/view" , viewGet)
router.get("/view/auth" , viewAuthGet)
router.get("/view/characters" , viewCharactersGet)
router.get("/view/movies" , viewMoviesGet)

export default router