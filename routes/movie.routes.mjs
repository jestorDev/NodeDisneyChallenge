import { Router } from "express";

import  {
    getMovies,
    getDetailsMovie, 
    createMovie,
    updateMovie,
    deleteMovie
} from "../controllers/movie.controller.mjs";


const router = Router()

router.get("/movies", (req, res) => {
    res.send(getMovies(req.query));
})

router.get("/movies/:movieId", (req, res) => {
    res.send(getDetailsMovie(req.params.movieId));
})

router.post("/movies", (req, res) => {
    //Create 
    
    res.send(createMovie(req.body));
})

router.put("/movies/:movieId", (req, res) => {
    //Update movie
    
    res.send(updateMovie(req.params.movieId ,req.body));
})

router.delete("/movies/:movieId", (req, res) => {
    //Delete movie
    res.send(deleteMovie(req.params.movieId ))
    
})

export default router
