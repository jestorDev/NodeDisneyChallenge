

export const getCharacters = (searchParams) => {
    //Return list of all Character 
    // Image, title  y creation date.

    if (Object.keys(searchParams).length === 0) 
        return " Im going to list all Characters in low detail"
    
    let filter = Object.keys(searchParams)[0]
    return " Searching by : " + filter + " with value " + searchParams[filter]
}


export const getDetailsCharacter = (CharacterId) => {
    // details of Character and characters
    return " Character by id : " + CharacterId
}

export const createCharacter = (Character) => {
    console.log(Character);
    // details of Character and characters
    return   "+++++++++create++++++++++" + JSON.stringify(Character)
}

export const updateCharacter = (id, Character) => {
    // details of Character and characters

    return  "+++++++++UPDating++++++++++ " + id +" +++++++++++" +  JSON.stringify(Character)
}
export const deleteCharacter = (id) => {
    return " Delete Character with id  :" + id;
}
