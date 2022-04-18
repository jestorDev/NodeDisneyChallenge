

import app from "./app.mjs";

/*
let findGenres = async (serachName) => {
    const detailedGenre = await db.models.Genre.findAll(
        {
          where: { name: serachName },
        include: db.models.Movie
      });
    console.log( "Genres -------------------\n" , JSON.stringify(detailedGenre, null, 2));
}
findGenres("Drama")

let findMovies = async (serachTitle) => {
    const detailedMovies = await db.models.Movie.findAll({
        where: { title: serachTitle },
        include: db.models.Genre
      });
    console.log( "Movies -------------------\n" , JSON.stringify(detailedMovies, null, 2));
}
*/


//findMovies("Lilo & Stitch")


app.listen(app.get("port"))
console.log("Server on : " , app.get("port"));



