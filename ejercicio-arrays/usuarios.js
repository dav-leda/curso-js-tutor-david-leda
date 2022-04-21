
// Chequear si el formato de mail ingresado es correcto usando Regular Expressions:
const mailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Array de datos a ingresar:
const datos = ['nombre', 'edad', 'mail']

// Array donde ir guardando los usuarios:
const usuarios = [];

// Indice del array de usuarios:
let index = 0;

// Clase Usuario:
class Usuario {
  
  constructor (nombre, edad, mail) {
    this.nombre = nombre;
    this.edad = edad;
    this.mail = mail;
  }
  
  mostrarDataUsuario() {
    alert(
      'Nombre: ' + this.nombre + '\n' + 
      'Edad: ' + this.edad + '\n' + 
      'Mail: ' + this.mail
    )
  }
}

// Metodos de validacion de datos ingresados.
// Si el dato ingresado esta mal retorna true
// con lo cual el ciclo while se repite y vuelve a pedir el dato.
const validacion = {

  nombre: (input) => input.length < 3,

  edad: (input) => isNaN(input) || input > 100,

  mail: (input) => !input.match(mailRegEx)
}

// Funcion para ingresar datos de usuario:
function ingresarDataUsuario(dato) {

  let input;
  
  do {
    input = prompt("Ingrese su " + dato)

  } while (validacion[dato](input));
  
  return input
}

// Funcion para crear un nuevo usuario:
function crearUsuario() {

  usuarios[index] = new Usuario();

  for (let dato of datos) {
    usuarios[index][dato] = ingresarDataUsuario(dato)
  }

  usuarios[index].mostrarDataUsuario()

  index++
}

do { 
  crearUsuario()

} while (confirm("Desea ingresar otro usuario?"));

// Mostrar la lista completa de usuarios creados:
alert('Usuarios: \n' + JSON.stringify(usuarios, null, 2))

