
const UsersDB = [];

class User {
  constructor (nombre, apellido, email){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
  }
}

module.exports = { UsersDB, User }