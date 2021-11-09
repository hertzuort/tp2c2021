const mongoclient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@ort-tp-21c-2021.ljbr9.mongodb.net/tp2c2021";

const client = new mongoclient(uri);


async function getConnection(){
    try {
        return await client.connect();
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getConnection};