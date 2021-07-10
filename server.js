//importamos los modulos necesarios
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
//Services
const { createUser, findUsers } = require('./services/contact.service');
//Middlewares
const { corsOption, limiter, controlApiKey } = require('./middlewares/index');

//configuración de middlewares globales
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(limiter)

app.use((err, req, res, next) => {
  if (err) {
    if (!res.headersSent) {
      return res.status(500).json('error interno del servidor');
    }
  }
  next();
})


//levantamos nuestro servidor
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})

app.get('/users', cors(corsOption), controlApiKey, (req, res) => {
  try {
    const users = findUsers();
    res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})
app.post('/users', cors(corsOption), controlApiKey, (req, res) => {
  try {
    const users = createUser (res.body);
    return res.status(200).json(users);
  } catch (error) {
    console.log('entre al 2do  catch');
    return res.status(400).json(error.message)
  }
})