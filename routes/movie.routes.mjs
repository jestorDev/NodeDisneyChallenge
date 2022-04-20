import { Router } from "express";

import  {
    moviesGet,
    moviesGetbyId,
    moviesPostCreate,
    moviesPutUpdate,
    moviesDelete} from "../controllers/movie.controller.mjs";




const router = Router()

router.get("/movies",moviesGet)

router.get("/movies/:movieId", moviesGetbyId)

router.post("/movies", moviesPostCreate )

router.put("/movies/:movieId", moviesPutUpdate)

router.delete("/movies/:movieId", moviesDelete)

export default router
