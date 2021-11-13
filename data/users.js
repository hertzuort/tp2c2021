const { ObjectId } = require('bson')
const conn = require('../server/conn');
const DATABASE = 'tp2c2021';
const USERS = 'users';

async function createUser(newUser) {
    const connection = await conn.getConnection()
    const user = await connection
      .db(DATABASE)
      .collection(USERS)
      .insertOne(newUser);
}

async function getUsers(){
    const connection = await conn.getConnection()
    const users = await connection
      .db(DATABASE)
      .collection(USERS)
      .find()
      .toArray()

      return users
}

async function getUserById(userId){
    const connection = await conn.getConnection()
    const user = await connection
      .db(DATABASE)
      .collection(USERS)
      .findOne({ _id: new ObjectId(userId) })

      return user
}


module.exports = {createUser,getUsers,getUserById}