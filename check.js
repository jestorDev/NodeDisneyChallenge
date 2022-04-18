import db from "./models/init.mjs";

let findMovies = async (serachTitle) => {
    const detailedMovies = await db.models.Movie.findAll({
        where: { title: serachTitle },
        include: db.models.Genre
      });
    console.log( "Movies -------------------\n" , JSON.stringify(detailedMovies, null, 2));
}


findMovies("Lilo & Stitch")