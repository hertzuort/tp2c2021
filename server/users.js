const userController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.post("/api/users", async (req, res) => {
    res.json(await userController.createUser(req.body))
})

router.get("/", async (req, res) => {
    res.json(await userController.getUsers())
})

router.get("/:id", async (req, res) => {
    res.json(await userController.getUserById(req.params.id))
})

router.get("/:usuarioId/posts", async (req, res) => {
    res.json(await postsController.getPostsByUserId(req.params.usuarioId))
})

module.exports = router;
