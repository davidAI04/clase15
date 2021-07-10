const { UsersDB, User } = require('../db/index');


const intermedio = () => {
  try {
    const llamado = createUser()
  } catch (error) {
    return error
  }
}
const createUser = (data) => {
  try {
    const { nombre, apellido, email } = data;
    const newUser = new User(nombre, apellido, email);
    UsersDB.push(newUser);
    return UsersDB;
  } catch (error) {
    console.log('entre al primer catch');
    throw new Error("error en create user");
  }
}

module.exports = { createUser };