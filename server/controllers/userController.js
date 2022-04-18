const users = require('../data/userRepository');
const jwt = require('jsonwebtoken');

async function createUser(user) {
    return users.createUser(user)
}

async function getUsers(){
    return users.getUsers()
}

async function getUserById(userId){
    return users.getUserById(userId)
}

async function generateAuthToken(mail, contraseña) {
    const user = await users.getByEmailAndPassword(mail, contraseña);
    return jwt.sign({userId:user._id, mail: user.mail}, process.env.AUTH_SECRET, {expiresIn: '1h'});
}


module.exports = {createUser,getUsers,getUserById,generateAuthToken} 