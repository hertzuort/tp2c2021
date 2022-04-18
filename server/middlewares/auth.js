const jwt = require('jsonwebtoken');

function getToken(req) {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("Debe proveer un Bearer Token en el header authorization");
    }
    return authHeader.substring(7);
}

async function auth(req, res, next){
    try {
        req.decodedToken = jwt.verify(getToken(req), process.env.AUTH_SECRET);
        next();
    } catch (error) {
        res.status(401).send({error: error.message});
    }
}

module.exports = auth;
