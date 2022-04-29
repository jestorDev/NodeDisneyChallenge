import jwt from 'jsonwebtoken';

export default function verify (req, res, next){
    console.log("verifyToken" , req.url);
    const authHeader = req.header('Authorization')
    let token = "tokendef"
    if (authHeader.startsWith("Bearer ")){
        token = authHeader.substring(7, authHeader.length);
   }
    console.log("Token: "  , token);
    if (!token) {
        console.log("Access denied");
        return res.status(401).json({ error: 'Access denied' })}
    try {

        const verified = jwt.verify(token, process.env.JWT_KEY)
        req.user = verified
        console.log("Access granted");
        next() 
    } catch (error) {
        res.status(400).json({error: 'Invalid token'})
    }

}


