import express from "express";

import characterRouter from "./routes/character.routes.mjs"
import moviesRouter from "./routes/movie.routes.mjs";

const app  = express()

app.set("port"  , 3000)

app.use(express.json());


app.use(characterRouter)
app.use(moviesRouter)

export default app

