const express = require("express");
const conn = require("./conn");
const { ObjectId } = require('bson')
const cors = require('cors');
const postsController = require('../controllers/posts');
const userController = require('../controllers/users');

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" })
})

app.get("/api/posts", async (req, res) => {
  res.json(await postsController.getAllPosts())
})

app.post("/api/users", async (req, res) => {
  res.json(await userController.createUser(req.body))
})

app.get("/api/users", async (req, res) => {
  res.json(await userController.getUsers())
})

app.get("/api/users/:id", async (req, res) => {
  res.json(await userController.getUserById(req.params.id))
})

app.post("/api/posts", async (req, res) => {
  res.json(await postsController.createPost(req.body))
})

app.get("/api/posts/:id", async (req, res) => {
  res.json(await postsController.getPostById(req.params.id))
})

app.get("/api/users/:usuarioId/posts", async (req, res) => {
  res.json(await postsController.getPostsByUserId(req.params.usuarioId))
})

app.put("/api/posts/:postId/like/:userId", async (req, res) => {
  res.json(await postsController.postLike(req.params.postId, req.params.userId))
})

app.get("/api/posts/:postId/likes", async (req, res) => {
  res.json(await postsController.getLikesByPostId(req.params.postId))
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

