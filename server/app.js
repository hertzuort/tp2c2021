const express = require("express");
const cors = require('cors');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.use('/api/users/', usersRoutes);
app.use('/api/posts/', postsRoutes);

app.get("/api", (req, res) => {
  res.json({ mensaje: "Hola, ORT!" })
})

// Error handler. Las rutas deben catchear los errores y llamar a next(..) con el error para que se ejecute este código
app.use(function(err, req, res, next) {
  console.log(err);
  if (err instanceof require('http-errors').HttpError) {
      res.status(err.status).send({message: err.message});
  } else {
      res.status(500).send({message: 'Hubo un error inesperado en el servidor'});
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})