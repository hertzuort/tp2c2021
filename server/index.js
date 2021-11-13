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

//Inicial
app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" })
})

//Trae todos los posts
app.get("/api/posts", async (req, res) => {
  res.json(await postsController.getAllPosts())
})

//Inserta un usuario nuevo
app.post("/api/users", async (req, res) => {
  res.json(await userController.createUser(req.body))
})

//Trae todos los usuarios
app.get("/api/users", async (req, res) => {
  res.json(await userController.getUsers())
})

//Trae un usuario
app.get("/api/users/:id", async (req, res) => {
  res.json(await userController.getUserById(req.params.id))
})

//Inserta un nuevo post
app.post("/api/posts", async (req, res) => {
  res.json(await postsController.createPost(req.body))
})

//Trae un post
app.get("/api/posts/:id", async (req, res) => {
  res.json(await postsController.getPostById(req.params.id))
})

//Trae todos los posts de un usuario
app.get("/api/users/:usuarioId/posts", async (req, res) => {
  res.json(await postsController.getPostsByUserId(req.params.usuarioId))
})

//Inserta un like en un post en base al id de un usuario
app.put("/api/posts/:postId/like/:userId", async (req, res) => {
  res.json(await postsController.postLike(req.params.postId, req.params.userId))
})

//Trae todos los likes de un post
app.get("/api/posts/:postId/likes", async (req, res) => {
  res.json(await postsController.getLikesByPostId(req.params.postId))
})

//Trae todos los comentarios de un post
app.get("/api/posts/:postId/comments", async (req, res) => {
  res.json(await postsController.getCommnetsByPostId(req.params.postId))
})

//Trae el total de likes de un post
app.get("/api/posts/:postId/likes/total", async (req,res) => {
  res.json(await postsController.getTotalLikesByPostId(req.params.postId))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

