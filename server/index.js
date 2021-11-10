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