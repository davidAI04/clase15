const { UsersDB, User, errorFunction } = require('../db/index');


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
    throw new Error(error);
  }
}

const findUsers = () => {
    try {
      return UsersDB;
    }catch (error) {
      throw new Error(error);
    }
}

//Función que hace el segundo nivel del catch
const failureFunction = () => {
    try {
      errorFunction();
    } catch (error) {
      console.log('falla desde el services.usuarios'); 
      throw new Error(error.message); 
    }
}

module.exports = { createUser, findUsers, failureFunction };