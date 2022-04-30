
import db from "../models/init.mjs";



/////////////////Endpoint request handlers//////////////////////////////////////////


export const charactersGet = async (req, res) => {

    let characters = {}
    let searchParams =req.query
    if ( Object.keys(searchParams).length === 0) {
        characters = db.models.Character.findAll({
            attributes: ['image', 'name', 'ID'],
        });
        res.status(200).send(await characters);
        return
    }
    console.log("Sparams :::::::::::" ,searchParams);
    let filter = Object.keys(searchParams)[0]
    console.log("Sparams :::::::::::" ,filter);
    let response = { msg: "Incorrect search params" }
    let status = 200
    switch (filter) {
        case "name":
            response = getCharacterByName(searchParams[filter]);break
        case "movies":
            response = getCharacterByMovie(searchParams[filter]);break
        case "age":
            response = getCharactersbyAge(searchParams[filter]);break
        default:
            status = 400
    }
    res.status(status).send(await response);
    
}

export const charactersGetbyId = async (req, res) => {
    // details of particular character
    res.send(
        await getDetailsCharacter(req.params.characterId)
    );
}

export const charactersPostCreate = async (req, res) => {
    //Create character
    res.send(
        createCharacter(req.body)
    );
}

export const charactersPutUpdate = async (req, res) => {
    //Update character
    res.send(
        updateCharacter(req.params.characterId, req.body)
    );
}

export const characterDelete = async (req, res) => {
    //Delete character
    res.send(deleteCharacter(req.params.characterId));
}


///////////////////////////////////////////////////////////


const getDetailsCharacter = async (CharacterId) => {

    let chara = await db.models.Character.findOne({
        where: { ID: CharacterId },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: [{
            model: db.models.Movie,
            attributes: {
                exclude: ['createdAt', 'updatedAt', "CharacterMovies"]
            }
        }]
    })


    console.log("Character in DB :", chara);

    return chara
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
const deleteCharacter = async (id) => {

    const actual = await db.models.Character.findOne({ where: { ID: id } })
    await actual.destroy();

    return " Delete Character with id  :" + id;
}



const getCharacterByName = (myname) => {
    console.log("-----------------by name--------------------");
    return db.models.Character.findAll({
        where: { name: myname },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
        
    });
}
const getCharacterByMovie = async (movId) => {
    return db.models.Character.findAll({
        attributes: ['image', 'name', 'ID'],
        include: [{
            model: db.models.Movie,
            where: { ID: movId } //
        }]

    });
}
const getCharactersbyAge = async (myAge) => {
    return db.models.Character.findAll({
        where: { age: myAge }
    });


}