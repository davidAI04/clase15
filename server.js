//importamos los modulos necesarios
const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');

//middlewares globales
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  if (err) {
    if (!res.headersSent) {
      return res.status(500).json('error interno del servidor');
    }
  }
  next();
})


const { corsOption } = require('./middlewares/index');
const { createUser } = require('./services/contact.service');

//levantamos nuestro servidor
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})


app.post('/', cors(corsOption), (req, res) => {
  try {
    const users = createUser (res.body);
    return res.status(200).json(users);
  } catch (error) {
    console.log('entre al 2do  catch');
    return res.status(400).json(error.message)
  }
})