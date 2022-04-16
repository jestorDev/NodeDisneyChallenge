

export const getMovies = (searchParams) => {
    //Return list of all movie 
    // Image, title  y creation date.

    if (Object.keys(searchParams).length === 0) 
        return " Im going to list all movies in low detail"
    
    let filter = Object.keys(searchParams)[0]
    return " Searching by : " + filter + " with value " + searchParams[filter]
}


export const getDetailsMovie = (movieId) => {
    // details of movie and characters
    return " Movie by id : " + movieId
}

export const createMovie = (movie) => {
    console.log(movie);
    // details of movie and characters
    return   "+++++++++create++++++++++" + JSON.stringify(movie)
}

export const updateMovie = (id, movie) => {
    // details of movie and characters

    return  "+++++++++UPDating++++++++++ " + id +" +++++++++++" +  JSON.stringify(movie)
}
export const deleteMovie = (id) => {
    return " Delete movie with id  :" + id;
}
