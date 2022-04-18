import db from "../models/init.mjs";



let getMovieByName = (name) => {
    return db.models.Movie.findAll({
        where: { title: name }
    });
}

let getMovieByGenre = (genre) => {
    return db.models.Movie.findAll({
        where: { title: genre }
    });
}

let getMoviesInOrder = (order) => {
    if (order === "DESC")
        return db.models.Movie.findAll({
            order: [
                ['ID', 'DESC'],
            ]
        });
    return db.models.Movie.findAll({
        order: [
            ['ID', 'ASC'],
        ]
    });
}



export const getMovies = (searchParams) => {

    if (Object.keys(searchParams).length === 0) {
        return db.models.Movie.findAll({
            attributes: ['image', 'title', "createdAt"],
        });
    }

    let filter = Object.keys(searchParams)[0]
    switch (filter) {
        case "name":
            return getMovieByName(searchParams[filter])
        case "genre":
            return getMovieByGenre(searchParams[filter])
        case "order":
            return getMoviesInOrder(searchParams[filter])
        default:
            return {}
    }

}


export const getDetailsMovie = (movieId) => {
    // details of movie and characters
    return " Movie by id : " + movieId
}

export const createMovie = (movie) => {
    console.log(movie);

    // details of movie and characters



    const newMovie = await db.models.Movie.create(movie)

    if (movie.characters) {
        movie.characters.forEach(characterId => {
            db.models.CharacterMovies.create(
                {
                    "MovieID": newMovie.ID,
                    "CharacterID": characterId
                },
            )
        });
    }

    if (movie.genres) {
        movie.genres.forEach(genreID => {
            db.models.MovieGenres.create(
                {
                    "MovieID" : newMovie.ID,
                    "GenreID" : genreID
                },
            )
        });
    }

    return "+++++++++create++++++++++" + JSON.stringify(movie)
}

export const updateMovie = (id, movie) => {
    // details of movie and characters

    const actual = await db.models.Movie.findOne({ where: { ID: id } })
    await actual.update(movie);


    return "+++++++++UPDating++++++++++ " + id + " +++++++++++" + JSON.stringify(movie)
}
export const deleteMovie = (id) => {
    return " Delete movie with id  :" + id;
}
