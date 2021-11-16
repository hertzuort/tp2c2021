require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;
const uri = process.env.CONSTR;
const client = new mongoclient(uri);

async function getConnection(){
    try {
        return await client.connect();
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getConnection};