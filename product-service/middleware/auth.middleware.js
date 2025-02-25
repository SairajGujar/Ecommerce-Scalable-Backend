import jwt from 'jsonwebtoken'


export async function authMiddleware(req, res, next) {
    try {
        
        const authHeader = req.headers['authorization'];
        if(!authHeader) return res.sendStatus(401);
        const token = authHeader.split(' ')[1];
        if(!token) return res.sendStatus(401);
        if(!jwt.verify(token, process.env.JWT_SECRET)) return res.sendStatus(401);
        req.user = jwt.decode(token);
        
        next();
        console.log("object")

    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}