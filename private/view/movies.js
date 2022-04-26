
const lilostich = {
    "title": "Lilo & Stitch",
    "image": "https://static.wikia.nocookie.net/disney/images/c/c6/LiloandStitchmovieposter.jpg/revision/latest/scale-to-width-down/1031?cb=20191229141632",
    "creation_date": "2002-06-21",
    "rating": "5.0",
    genres: [
        {
            "name": "Action",
            "image": "https://s1.eestatic.com/2020/06/10/series/cine/netflix-peliculas-cine_496711655_153519932_1706x960.jpg"
        },
        {
            "name": "Drama",
            "image": "https://media.glamour.com/photos/5ec2e904af30542b4c66c451/master/w_3000,h_1621,c_limit/MCDLIWO_CO010.jpg"
        }
    ],
    characters:[
        {
            "name": "Stich",
            "image": "https://i.pinimg.com/originals/b6/ff/63/b6ff634d9e297e3045f705bb43bd3fd4.png",
            "age": 20,
            "weitgh": 300.2,
            "history": " Stitch (also known as Experiment 626) is one of the titular protagonists of the Lilo & Stitch franchise. He is an illegal, genetic experiment created by Jumba Jookiba, whose primary function is to destroy everything he touches. After escaping the lawful Galactic Armada, Stitch crash-lands on Earth, on the Hawaiian island of Kauai, where he meets a lonely girl named Lilo. Through Lilo's love and guidance, Stitch abandons his evil programming, permanently reforms, and becomes part of Lilo’s Ohana (family). "
        },
        {
            "name": "Lilo Pelekai",
            "image": "https://static.wikia.nocookie.net/disney/images/1/1f/Profile_-_Lilo.png",
            "age": 8,
            "weitgh": 40,
            "history": "Lilo Pelekai is one of the titular protagonists of the Lilo & Stitch franchise. She is a young, orphaned Hawaiian girl who lives on the island of Kauai with her older sister, Nani, and her extended yet unconventional family of alien visitors marooned on Earth. "
        }
    ]
}




function noLoginComponent() {
    return `<tr  id="login-row">
    <td colspan="5">
    <div><h2>Login to get access</h2></div>
    <div>
    <a href="/login" class="m-2 btn btn-primary btn-block btn-lg">
        <span class="icon text-white-50">
            <i class="fas fa-flag"></i>
        </span>
        <span class="text">Log in</span>
    </a>
</div>
<div>
    <a href="/register" class="m-2 btn btn-primary btn-block btn-lg">
        <span class="icon text-white-50">
            <i class="fas fa-flag"></i>
        </span>
        <span class="text">Register</span>
    </a>
</div>

    </td>
    </tr>
    `
}

function logoutBtn(params) {
    let btn  = document.getElementById("logout")
    btn.onclick = ()=>{
        localStorage.clear();
        document.location.href = "/";
    }
}

logoutBtn()




function characterListComponent(elemsList) {
    let elemsListComp= ""
    elemsList.forEach(
        movie=> {elemsListComp += elemsCardComponent(movie)}
    )
    return elemsListComp
}

function elemsCardComponent(elem) {
    return `<div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        ${elem.name}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                        </div>
                    </div>
                    <div class="col-auto">
                    <img class="mt-2" src="${elem.image}">
                    </div>
                </div>
            </div>
        </div>
    </div>`
}


function detailsComponent(movie) {

    return `<tr id="details-${movie.ID}" > 
        <td colspan="5" style = "text-align:  left;">   
        <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <h6 class="m-0 font-weight-bold text-primary">Name: ${movie.title}</h6>
                                    </div>
                                    <div class="card-body">
                                    <div>Creation date:<br> ${movie.creation_date}</div>
                                    <div>rating:<br> ${movie.rating}</div>
                                    <div> characters :<br> <div class="row"> ${characterListComponent(movie.characters)} </div></div>
                                    <div> genres:<br> <div class="row"> ${characterListComponent(movie.genres)}</div></div>
                                    </div>
                    </div>
        </td>
        </tr>`
        
}



function getDetails(id) {
    console.log("Details of id : ", id);

    let characterID = id.substring(8)
    console.log(lilostich);
    let actualRow = document.getElementById("row-" + characterID)
    actualRow.insertAdjacentHTML("afterend", detailsComponent(lilostich))

}


function rowMovieComponent(movie) {
    return `<tr id="row-${movie.ID}">
    <td>${movie.title}</td>
    <td><img src="${movie.image}"></td>
    <td><a id = "details-${movie.ID}" href="#" class="btn btn-info btn-circle btn-lg"
    onclick=getDetails(this.id)>
        <i class="fas fa-info-circle" ></i></a></td>
    <td><a id="update-${movie.ID}" href="#" class="btn btn-warning btn-circle btn-lg"
    type="button" data-bs-toggle="modal"  data-bs-target="#exampleModal" 
    >
        <i class="fas fa-exclamation-triangle"></i></a></td>
    <td><a href="#" class="btn btn-danger btn-circle btn-lg">
        <i class="fas fa-trash"></i>
    </a></td>
</tr>
`
}

async function getMovies() {

    let accessToken =  localStorage.getItem("token")
    if (!accessToken){
        let list = document.getElementById("list")
        list.innerHTML = noLoginComponent()
        let createbtn =  document.getElementById("create--1")
        createbtn.classList.add("d-none");
        return
    }




    let response = await fetch('/movies');
    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {

        
        var movies = await response.json()

        console.log(movies[0]);
        let list = document.getElementById("list")
        let table = ""
        movies.forEach(movie => {
            table += rowMovieComponent(movie);
        });

        list.innerHTML = table
    }
}
getMovies()