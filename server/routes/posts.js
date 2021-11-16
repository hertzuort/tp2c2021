const postsController = require('../controllers/posts');
const auth = require('../middlewares/auth')
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    res.json(await postsController.getAllPosts())
})

router.post("/", async (req, res) => {
    res.json(await postsController.createPost(req.body))
})

router.get("/:id", async (req, res) => {
    res.json(await postsController.getPostById(req.params.id))
})

router.put("/:postId/like", auth, async (req, res) => {
    res.json(await postsController.postLike(req.params.postId, req.decodedToken.userId))
})

router.get("/:postId/likes", async (req, res) => {
    res.json(await postsController.getLikesByPostId(req.params.postId))
})

router.get("/:postId/comments", async (req, res) => {
    res.json(await postsController.getCommnetsByPostId(req.params.postId))
})

router.get("/:postId/likes/total", async (req, res) => {
    res.json(await postsController.getTotalLikesByPostId(req.params.postId))
})


module.exports = router;
