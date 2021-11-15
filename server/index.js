const express = require("express");
const cors = require('cors');
const usersRoutes = require('./users');
const postsRoutes = require('./posts');

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use('/api/users/', usersRoutes);
app.use('/api/posts/', postsRoutes);
app.use(cors({
    origin: '*'
}));

app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
