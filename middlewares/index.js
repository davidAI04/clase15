const rateLimit = require('express-rate-limit');

const corsOption = {
  origin: function (origin, callback) {
    if (process.env.LISTA_BLANCA.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('No autorizado por CORS'))
    }
  }
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: 'Usted exedió el limite de accesos a la API'
  });

const chkDatosValidos = function (req, res, next) {
    const { nombre, apellido, email } = req.body;

    if (!nombre || !apellido || !email) {
        return res.status(400)
            .json('Datos del contacto invalido!!!');
    }

    return next();
}

const controlApiKey = function (err, req, res, next) {
    if (process.env.APIKEY ===  req.body.apikey){
        return next()
    }else {
        let error = {
          "error": "Debe enviar una Api-Key"  
        }
        return res.status(400).json(error)
    }
}

module.exports = { corsOption, limiter, chkDatosValidos, controlApiKey };