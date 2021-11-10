const express = require("express");
const conn = require("./conn");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" });
});

app.get("/api/posts", async (req, res) => {
  const connection = await conn.getConnection();
  const posts = await connection
                        .db("tp2c2021")
                        .collection("posts")
                        .find()
                        .toArray();
  res.json(posts);
});

app.post("/api/users", async (req, res) => {
  const connection = await conn.getConnection();
  console.log(req.body)
  const user = await connection
                        .db("tp2c2021")
                        .collection("users")
                        .insertOne(req.body);
  res.json(user);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});