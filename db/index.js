
const UsersDB = [];

class User {
  constructor (nombre, apellido, email){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
  }
}

//Funcion para simular un error de 3 niveles *esta función se vuelve a consumir en los service
const errorFunction = () => {
  throw new Error ("(Matrix) Morfeo, debiste tomar la pastilla AZUL! JAJAJAJAJAJA ")
}

module.exports = { UsersDB, User, errorFunction }