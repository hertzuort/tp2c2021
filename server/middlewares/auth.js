const jwt = require('jsonwebtoken');

async function auth(req, res, next){
    try {
        const token = req.header('Token');
        req.decodedToken = jwt.verify(token, process.env.AUTH_SECRET);
        next();
    } catch (error) {
        res.status(401).send({error: error.message});
    }
}

module.exports = auth;