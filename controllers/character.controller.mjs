
import db from "../models/init.mjs";

export const getCharacters = (searchParams) => {
    //Return list of all Character 
    // Image, title  y creation date.


    if (Object.keys(searchParams).length === 0)
        return db.models.Character.findAll({
            attributes: ['image', 'name'],
        });

    let filter = Object.keys(searchParams)[0]

    switch (filter) {
        case "name":
            return getMovieByName(searchParams[filter])
        case "age":
            return getMovieByGenre(searchParams[filter])
        case "movie":
            return getMoviesInOrder(searchParams[filter])
        default:
            return {}
    }
}


export const getDetailsCharacter = async (CharacterId) => {

    let chara = await db.models.Character.findOne({
        where: { ID: CharacterId },
        include: db.models.Movie
    })

    console.log("**********Characer movies***************** \n", chara.Movies);
    // details of Character and characters
    return " Character by id : " + CharacterId
}

export const createCharacter = async (Character) => {

    /*
    {
         "name": "Stich3",
         "image": "https://i.pinimg.com/originals/b6/ff/63/b6ff634d9e297e3045f705bb43bd3fd4.png",
         "age": 20,
         "weitgh": 300.2,
         "history": " Stitch (also known as ete sitch) is one of the titular protagonists of the Lilo & Stitch franchise. He is an illegal, genetic experiment created by Jumba Jookiba, whose primary function is to destroy everything he touches. After escaping the lawful Galactic Armada, Stitch crash-lands on Earth, on the Hawaiian island of Kauai, where he meets a lonely girl named Lilo. Through Lilo's love and guidance, Stitch abandons his evil programming, permanently reforms, and becomes part of Lilo’s Ohana (family). ",
         "movies": [1,2,3]
     }
    */
    const created = await db.models.Character.create(Character)

    if (Character.movies) {
        Character.movies.forEach(movie => {
            db.models.CharacterMovies.create(
                {
                    "MovieID": movie,
                    "CharacterID": created.ID
                },
            )
        });
    }
    return "Finished?"
}

export const updateCharacter = async (id, Character) => {

    const actual = await db.models.Character.findOne({ where: { ID: id } })
    await actual.update(Character);

    return "+++++++++UPDating++++++++++ " + id + " +++++++++++" + JSON.stringify(Character)
}
export const deleteCharacter = async(id) => {

    const actual = await db.models.Character.findOne({ where: { ID: id } })
    await actual.destroy();

    return " Delete Character with id  :" + id;
}
