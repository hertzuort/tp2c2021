const userController = require('../controllers/users');
const router = require('express').Router()

router.post("/", async (req, res) => {
    res.json(await userController.createUser(req.body))
})

router.get("/", async (req, res) => {
    res.json(await userController.getUsers())
})

router.get("/:id", async (req, res) => {
    res.json(await userController.getUserById(req.params.id))
})

router.get("/:id/posts", async (req, res) => {
    res.json(await postsController.getPostsByUserId(req.params.id))
})

router.post("/login", async (req, res, next) => {
    try {
        res.json({token: await userController.generateAuthToken(req.body.mail, req.body.contraseña)})
    } catch (error) {
        next(error);
    }
})

module.exports = router;
