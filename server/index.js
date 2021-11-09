const express = require("express");
const conn = require("./conn");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" });
});

app.get("/api/posts", async (req, res) => {
  const connection = await conn.getConnection();
  console.log(connection);
  const asd = await connection
                        .db("tp2c2021")
                        .collection("posts")
                        .find()
                        .toArray();
  res.json(asd);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



// Subir mensajes
// Leer mensajes
// Ver seguidores, ver seguidos.
// Likes 
// Ver likes 


// Crear usuario, logearse, seguir usuario, ver a quien sigo.

// Ver mensajes escritos, ver mensajes escritos por otras personas, dar likes y ver likes.

// Nombre de integrantes, nombre de proyecto y las funcionalidades que abarca el proyecto.

// Nice to have => Poder poner img en los mensajes. (De la manera que prefiramos)