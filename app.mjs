import express from "express";

import characterRouter from "./routes/character.routes.mjs"
import moviesRouter from "./routes/movie.routes.mjs";
import authRouter from "./routes/auth.routes.mjs";
import verify from "./middleware/token.mjs"

import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import  dotenv  from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app  = express()

app.set("port"  , 3000)

app.use(express.json());








app.use(express.static(path.join(__dirname, 'public'),{extensions:['html']}));
app.use( express.static( path.join( __dirname, 'private' ),{extensions:['html']} ) );

app.use(authRouter)
app.use(verify ,characterRouter)
app.use(verify ,moviesRouter)



export default app

