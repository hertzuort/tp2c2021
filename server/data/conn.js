require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;
const uri = process.env.CONSTR;
const client = new mongoclient(uri);
let connection = null;

async function getConnection(){
   if (connection == null) return createConnection();
   return connection;
}
async function createConnection() {
    connection = await client.connect();
    return connection;
}


module.exports = {getConnection};