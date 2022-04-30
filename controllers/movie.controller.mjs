import db from "../models/init.mjs";


////////////////////////////////////////////////////



export const moviesGet = async (req, res) => {
    res.send(await getMovies(req.query));
}

export const moviesGetbyId = async (req, res) => {
    res.send(await getDetailsMovie(req.params.movieId));
}

export const moviesPostCreate = async (req, res) => {
    //Create 
    res.send(await createMovie(req.body));
}


export const moviesPutUpdate = async (req, res) => {
    //Update movie
    res.send(await updateMovie(req.params.movieId, req.body));
}

export const moviesDelete = async (req, res) => {
    //Delete movie
    console.log("Delete --------------- " , req.params.movieId);
    res.send(await deleteMovie(req.params.movieId))
}


////////////////////////////////////////////////////


let getMovieByName = (name) => {
    return db.models.Movie.findAll({
        where: { title: name }
    });
}

let getMovieByGenre = async (genreId) => {
    const foundMovies = await  db.models.Movie.findAll({
        attributes: ['ID', 'image', 'title', "creation_date"],
        include: [{
            model: db.models.Genre,
            where: { ID: genreId } //
        }]

    })
    return foundMovies;
}

let getMoviesInOrder = (order) => {
    if (order === "DESC")
        return db.models.Movie.findAll({
            order: [
                ['creation_date', 'DESC'],
            ],
            attributes: ['ID', 'image', 'title', "creation_date"],
        });
    return db.models.Movie.findAll({
        order: [
            ['creation_date', 'ASC'],
        ],
        attributes: ['ID', 'image', 'title', "creation_date"],
    });
}



export const getMovies = (searchParams) => {

    if (Object.keys(searchParams).length === 0) {
        return db.models.Movie.findAll({
            attributes: ['ID', 'image', 'title', "createdAt"],
        });
    }

    let filter = Object.keys(searchParams)[0]
    switch (filter) {
        case "name":
            console.log("maneeeeeeeeeeeeeee");
            return getMovieByName(searchParams[filter])
        case "genre":
            return getMovieByGenre(searchParams[filter])
        case "order":
            return getMoviesInOrder(searchParams[filter])
        default:
            return {}
    }

}


export const getDetailsMovie = async (movieId) => {
    // details of movie and characters
    let mov = await db.models.Movie.findOne({
        where: { ID: movieId },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: [{
            model: db.models.Character,
            attributes: {
                exclude: ['createdAt', 'updatedAt', "CharacterMovies"]
            }
        },
        {
            model: db.models.Genre,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
        ]
    })


    console.log("Movie in DB :", mov);

    return mov
}

export const createMovie = async (movie) => {
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
                    "MovieID": newMovie.ID,
                    "GenreID": genreID
                },
            )
        });
    }

    return "+++++++++create++++++++++" + JSON.stringify(movie)
}

export const updateMovie = async (id, movie) => {
    // details of movie and characters

    const actual = await db.models.Movie.findOne({ where: { ID: id } })
    await actual.update(movie);


    return "+++++++++UPDating++++++++++ " + id + " +++++++++++" + JSON.stringify(movie)
}
export const deleteMovie = async (id) => {

    const actual = await db.models.Movie.findOne({ where: { ID: id } })
    await actual.destroy();
    return {msg : "Deleted movie"}
}
