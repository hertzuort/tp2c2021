const users = require('../data/users');

async function createUser(user) {
    return users.createUser(user)
}

async function getUsers(){
    return users.getUsers()
}

async function getUserById(userId){
    return users.getUserById(userId)
}


module.exports = {createUser,getUsers,getUserById} 