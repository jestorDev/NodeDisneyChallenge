
async function getCharacters() {
    let response = await fetch('/characters');
    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let characters = await response.json()
        let list = document.getElementById("list")
        let table = ""
        characters.forEach(character=> {            
            table +=`<tr  id="${character.ID}" >
            <td>${character.name}</td>
            <td><img src="${character.image}"></td>
            <td><a href="#" onclick="getDetails(this.id)" class="btn btn-info btn-circle btn-lg">
                <i class="fas fa-info-circle"></i></a></td>
            <td><a href="#" onclick="updatecharacter(this.id)" class="btn btn-warning btn-circle btn-lg">
                <i class="fas fa-exclamation-triangle"></i></a></td>
            <td><a href="#" onclick="deleteCharacter(this.id)" class="btn btn-danger btn-circle btn-lg">
                <i class="fas fa-trash"></i>
            </a></td>
        </tr>
        `;
        });

        respo = characters
        list.innerHTML = table
    }
}


function   updatecharacter(id){
    console.log("Going to    updatecharacter id : " , id);
}
function   deleteCharacter(id){
console.log("Going to    deleteCharacter id : " , id);
}

function getDetails(id) {
    console.log("Going to  getDetails id : " , id);
}



getCharacters();