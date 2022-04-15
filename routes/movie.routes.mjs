import { Router } from "express";


const router =  Router()




router.get("/movies" , (req  , res) => {
    //Return list of all movie 
    // Image, title  y creation date.

    let response  = " Return list of all characters"
    console.log(  "Requ : ", req.query);
    if (Object.keys(req.query).length !== 0){
        console.log("Params : " , req.query);
        let filter = Object.keys ( req.query)[0]
        response += " Searching by : " + filter + " with value " + req.query[filter]
        console.log("First : " , filter );
        console.log("First value : " , req.query[filter]);
                
    }


    res.send(response);
})

router.get("/movies/:userId" , (req  , res) => {
    // details of movie and characters
    res.send();
})

router.post("/movies" ,  (req  , res) => {
    //Create movie
    res.send();
})

router.put("/movies/:userId" ,  (req  , res) => {
    //Update movie
    res.send();
})

router.delete("/movies/:userId" ,  (req  , res) => {
    //Delete movie
    res.send();
})







export default router
