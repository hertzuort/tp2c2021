const { ObjectId } = require('bson')
const conn = require('./conn');
const bcrypt = require('bcryptjs');
const { Forbidden } = require('http-errors');
const DATABASE = 'tp2c2021';
const USERS = 'users';

async function createUser(newUser) {
    const connection = await conn.getConnection()
    newUser.contraseña = await bcrypt.hash(newUser.contraseña, 8);
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

async function getByEmailAndPassword(mail, contraseña){
  const connection = await conn.getConnection();
  const user = await connection
    .db(DATABASE)
    .collection(USERS)
    .findOne({mail: mail});

  if(!user || !await bcrypt.compare(contraseña, user.contraseña)){
    throw new Forbidden('Credenciales no válidas');
  }

  return user;
}


module.exports = {createUser,getUsers,getUserById,getByEmailAndPassword}