
import db from "./models/init.mjs";

import data from "./data.json" assert {type: "json"}


console.log(db.models);

console.log(data.movieArr);



db.models.Character.bulkCreate(data.characterArr).then(() => console.log("Users data have been saved"));
db.models.Genre.bulkCreate(data.genreArr).then(() => console.log("Users data have been saved"));
db.models.Movie.bulkCreate(data.movieArr).then(() => console.log("Users data have been saved"));
db.models.MovieGenres.bulkCreate(data.movieGenresArr).then(() => console.log("Users data have been saved"));
db.models.CharacterMovies.bulkCreate(data.characterMovies).then(() => console.log("Users data have been saved"));

await db.sync();



//export default db

