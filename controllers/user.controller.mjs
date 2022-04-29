
import db from "../models/init.mjs";

import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;


function generateToken(email) {
    console.log( "Env  : ", process.env.JWT_KEY);
    let secret = process.env.JWT_KEY || "1239YvkO9rZv5cnDif8qigoD9PxOmq2iemG"
    console.log( "Jwt Secret ----------------------" , secret);
    const tokenLogin = sign({"email":email}, secret , {expiresIn: "2h"})
    return tokenLogin
}

export const loginPostAccess = async (req, res) => {
    console.log("--------------Login POST--------------------");

    const oldUser = req.body
    console.log("Recieved :", oldUser);
    if (!oldUser.email || !oldUser.password)
        return res.status(401).json({ msg: "Please send email and password" })

    let resgisteredUser = await db.models.User.findOne({
        attributes: ['email', 'password'],
        where: { email: oldUser.email }
    });

    console.log("Found in db:", resgisteredUser);

    if (resgisteredUser && resgisteredUser.password == oldUser.password)
        res.status(200).send({ msg: "Correct Login", "token": generateToken(oldUser.email)})
    else
        res.status(400).send({ msg: "Incorrect user or password" })
}
export const registerPostCreate = async (req, res) => {
    console.log("--------------Register POST--------------------");
    const newUser = req.body
    console.log("Creating : ", newUser);

    let found = await db.models.User.findOne({
        attributes: ['email', 'password'],
        where: { email: newUser.email }
    });

    if (found) {
        res.status(400).send({ msg: "Email already registered" })
        return 
    }

    try {
        await db.models.User.create(newUser)
        res.status(200).send({ msg: "Created user" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong " })
    }
}
