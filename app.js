import express from "express";

import characterRouter from "./routes/character.routes.mjs"

const app  = express()

app.set("port"  , 3000)

app.use(characterRouter)

app.listen(app.get("port"))
console.log("Server on : " , app.get("port"));
