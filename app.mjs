import express from "express";

import characterRouter from "./routes/character.routes.mjs"
import moviesRouter from "./routes/movie.routes.mjs";
import authRouter from "./routes/auth.routes.mjs";
import viewRouter from "./routes/view.routes.mjs";

import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app  = express()

app.set("port"  , 3000)

app.use(express.json());







function isLoggedIn( req, res, next ) {
   console.log("trying restricted file");
   next();
}

app.use( isLoggedIn, express.static( path.join( __dirname, 'private' ) ) );

app.use( express.static( path.join( __dirname, 'anonymous' ) ) );

app.use(express.static(path.join(__dirname, 'public'),{extensions:['html']}));

app.use(characterRouter)
app.use(moviesRouter)
app.use(authRouter)
app.use(viewRouter)


export default app

