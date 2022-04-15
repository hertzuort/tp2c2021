const userController = require('../controllers/users');
const postController = require('../controllers/posts');
const router = require('express').Router();
const userSchema = require('../schemas/users');

router.post("/", async (req, res) => {
    const newUser = userSchema.validateUser(req.body);
    res.json(await userController.createUser(newUser));
});

router.get("/", async (req, res) => {
    res.json(await userController.getUsers())
})

router.get("/:id", async (req, res) => {
    res.json(await userController.getUserById(req.params.id))
})

router.get("/:id/posts", async (req, res) => {
    res.json(await postController.getPostsByUserId(req.params.id))
})

router.post("/login", async (req, res, next) => {
    try {
        res.json({token: await userController.generateAuthToken(req.body.mail, req.body.contraseña)})
    } catch (error) {
        next(error);
    }
})

module.exports = router;
