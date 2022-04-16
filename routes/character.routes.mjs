import { Router } from "express";


const router =  Router()

router.get("/characters" , (req  , res) => {
    //Return list of all characters
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

router.get("/characters/:characterId" , (req  , res) => {
    // details of particular character
    res.send();
})


router.post("/characters" ,  (req  , res) => {
    //Create character
    res.send();
})


router.put("/characters/:characterId" ,  (req  , res) => {
    //Update character
    res.send();
})

router.delete("/characters/:characterId" ,  (req  , res) => {
    //Delete character
    res.send();
})


export default router