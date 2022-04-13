
import db from "./models/init.mjs";

import data from "./data.json" assert {type: "json"}


import net from "net"




let createMovie = (movieData)=> {

}


console.log(db.models);

console.log(data.movieArr);



db.models.Movie.bulkCreate(data.movieArr).then(() => console.log("Users data have been saved"));
db.models.Character.bulkCreate(data.characterArr).then(() => console.log("Users data have been saved"));
db.models.Genre.bulkCreate(data.genreArr).then(() => console.log("Users data have been saved"));






net.createServer().listen();
