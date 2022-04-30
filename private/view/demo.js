
import {fetcher  } from "./utlis.mjs";
const queryString = window.location.search;

console.log("----------------" , queryString);

document.getElementById("title").innerHTML = queryString

//let contentElem = 
//contentElem.innerHTML = "Hola"



let  getQuery = async (document)=> {
    let response = await fetcher(queryString.substring(1));    
    let list  = await  response.json()
    document.getElementById("content").innerHTML =  JSON.stringify(list, null, 2);
}

getQuery(document)