import { fetcher } from "./utlis.mjs";

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
    let btn = document.getElementById("logout")
    btn.onclick = () => {
        localStorage.clear();
        document.location.href = "/";
    }
}

logoutBtn()




function characterListComponent(elemsList) {
    let elemsListComp = ""
    elemsList.forEach(
        movie => { elemsListComp += elemsCardComponent(movie) }
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
            <div>Creation date:
            <br> ${movie.creation_date.split("T")[0]}</div>
            <div>rating:
            <br> ${movie.rating}</div>
            <div> characters :
            <br> <div class="row"> ${characterListComponent(movie.Characters)} </div></div>
            <div> genres:
            <br> <div class="row"> ${characterListComponent(movie.Genres)}</div></div>
            </div>
        </div>
        </td>
        </tr>`

}


async function getMovieDetails(id) {
    let response = await fetcher("/movies/" + id)
    return await response.json()

}


async function getDetails(id) {
    console.log("Details of id : ", id);

    let movieID = id.substring(8)

    let actualRow = document.getElementById("row-" + movieID)

    let actualmovie = await getMovieDetails(movieID)
    console.log(actualmovie);
    actualRow.insertAdjacentHTML("afterend", detailsComponent(actualmovie))

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
    <td><a id="delete-${movie.ID}" class="btn btn-danger btn-circle btn-lg"
    onclick=deleteMovie(this.id)>
        <i class="fas fa-trash"></i>
    </a></td>
</tr>
`
}


async function deleteMovie(id) {

    await fetcher("/movies/" + id.substring(7), { method: 'delete' })

    console.log("going to delete ", id.substring(7));
}

async function getMovies() {

    let accessToken = localStorage.getItem("token")
    if (!accessToken) {
        let list = document.getElementById("list")
        list.innerHTML = noLoginComponent()
        let createbtn = document.getElementById("create--1")
        createbtn.classList.add("d-none");
        return
    }




    let response = await fetcher('/movies');
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







function modalCreateEventListen() {
    let modalForm = document.getElementById('exampleModal')
    modalForm.addEventListener("show.bs.modal",
        async (event) => {
            let movId = event.relatedTarget.getAttribute('id')
            movId = movId.substring(7)
            console.log("Going to update ", movId);
            if (movId != "-1") {
                //Uptaating
                let movieData = await getMovieDetails(movId)
                console.log("-----------MOdal update------------------");
                document.getElementById("exampleModalLabel").textContent = "Update Movie"
                document.getElementById("form-movie-title").value = movieData.title
                document.getElementById("form-movie-image").value = movieData.image
                let datedate = (new Date(movieData.creation_date).toLocaleDateString()).replaceAll("/", "-")
                console.log(datedate);
                document.getElementById("form-movie-creation_date").value = datedate
                document.getElementById("form-movie-rating").value = movieData.rating
                document.getElementById("form-movie-characters").value = movieData.Characters.map(e => e.name).toString()
                document.getElementById("form-movie-genres").value = movieData.Genres.map(e => e.name).toString()
            }
            else {
                document.getElementById("exampleModalLabel").textContent = "New Movie"
            }
        }
    )
}

modalCreateEventListen()