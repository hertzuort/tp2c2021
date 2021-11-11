const express = require("express");
const conn = require("./conn");
const { ObjectId } = require('bson')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())

app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" })
})

app.get("/api/posts", async (req, res) => {
  const connection = await conn.getConnection()
  const posts = await connection
    .db("tp2c2021")
    .collection("posts")
    .find()
    .toArray();
  res.json(posts)
})

app.post("/api/users", async (req, res) => {
  const connection = await conn.getConnection()
  console.log(req.body)
  const user = await connection
    .db("tp2c2021")
    .collection("users")
    .insertOne(req.body);
  res.json(user)
})

app.get("/api/users", async (req, res) => {
  const connection = await conn.getConnection()
  console.log(req.body)
  const users = await connection
    .db("tp2c2021")
    .collection("users")
    .find()
    .toArray()
  res.json(users)
})

app.get("/api/users/:id", async (req, res) => {
  const connection = await conn.getConnection()
  console.log(req.body)
  const user = await connection
    .db("tp2c2021")
    .collection("users")
    .findOne({ _id: new ObjectId(req.params.id) })
  res.json(user)
})

app.post("/api/posts", async (req, res) => {
  const connection = await conn.getConnection()
  const posts = await connection
    .db("tp2c2021")
    .collection("posts")
    .insertOne(req.body)
  res.json(posts)
})

app.get("/api/posts/:id", async (req, res) => {
  const connection = await conn.getConnection()
  const posts = await connection
    .db("tp2c2021")
    .collection("posts")
    .findOne({ _id: new ObjectId(req.params.id) })
  res.json(posts)
})

app.get("/api/users/:usuarioId/posts", async (req, res) => {
  const connection = await conn.getConnection()
  const posts = await connection
    .db("tp2c2021")
    .collection("posts")
    .find({ usuarioId: req.params.usuarioId })
    .toArray()
  res.json(posts)
})

app.put("/api/posts/:postId/like", async (req, res) => {
  const clientmongo = await getConnection();
  const query = { _id: new ObjectId(req.params.postId) };
  const newValues = {
    $set: {
      likes: likes.push("618c57d69145945bd2238dab")
    }
  }

  const result = clientmongo.db("tp2c2021")
    .collection("posts")
    .updateOne(query, newValues);
  return result;

})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})