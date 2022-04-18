import { Router } from "express";

import  {
    getMovies,
    getDetailsMovie, 
    createMovie,
    updateMovie,
    deleteMovie
} from "../controllers/movie.controller.mjs";




const router = Router()

router.get("/movies", async (req, res) => {
    res.send(await getMovies(req.query));
})

router.get("/movies/:movieId", async (req, res) => {
    res.send(await getDetailsMovie(req.params.movieId));
})

router.post("/movies", async(req, res) => {
    //Create 
    res.send( await createMovie(req.body));
})

router.put("/movies/:movieId", async(req, res) => {
    //Update movie
    res.send( await updateMovie(req.params.movieId ,req.body));
})

router.delete("/movies/:movieId", async(req, res) => {
    //Delete movie
    res.send( await deleteMovie(req.params.movieId ))
})

export default router
