
import db from "../models/init.mjs";



/////////////////Endpoint request handlers//////////////////////////////////////////


export const charactersGet = async (req  , res) => {
    
    let  characters = {}
   
    if (Object.keys(req.query).length === 0){
        characters = db.models.Character.findAll({
            attributes: ['image', 'name', 'ID'],
        });
        res.status(200).send(await characters);
    }
    
}

export const charactersGetbyId= async (req  , res) => {
    // details of particular character
    res.send(
        getDetailsCharacter(req.params.characterId)
    );
}

export const charactersPostCreate =async (req  , res) => {
    //Create character
    res.send(
        createCharacter(req.body)
    );
}

export const charactersPutUpdate= async (req  , res) => {
    //Update character
    res.send(
        updateCharacter(req.params.characterId, req.body)
    );
}

export const characterDelete = async (req  , res) => {
    //Delete character
    res.send(deleteCharacter(req.params.characterId));
}


///////////////////////////////////////////////////////////


const getCharacters = (searchParams) => {
    //Return list of all Character 
    // Image, title  y creation date.
    if (Object.keys(searchParams).length === 0)
        return 

    let filter = Object.keys(searchParams)[0]

    switch (filter) {
        case "name":
            return getMovieByName(searchParams[filter])
        case "age":
            return getMovieByGenre(searchParams[filter])
        case "movie":
            return getMoviesInOrder(searchParams[filter])
        default:
            return {msj :  "Incorrect search params"}
    }
}


const getDetailsCharacter = async (CharacterId) => {

    let chara = await db.models.Character.findOne({
        where: { ID: CharacterId },
        include: db.models.Movie
    })

    console.log("**********Characer movies***************** \n", chara.Movies);
    // details of Character and characters
    return " Character by id : " + CharacterId
}

const createCharacter = async (Character) => {

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

const updateCharacter = async (id, Character) => {

    const actual = await db.models.Character.findOne({ where: { ID: id } })
    await actual.update(Character);

    return "+++++++++UPDating++++++++++ " + id + " +++++++++++" + JSON.stringify(Character)
}
const deleteCharacter = async(id) => {

    const actual = await db.models.Character.findOne({ where: { ID: id } })
    await actual.destroy();

    return " Delete Character with id  :" + id;
}
