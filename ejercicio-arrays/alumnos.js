
// Array de datos a ingresar:
const datos = ['nombre', 'apellido', 'edad']

// Array donde ir guardando los alumnos:
const alumnos = [];

// Array donde ir guardando los nombres completos:
const nombresAlumnos = [];

// Indice del array de alumnos:
let index = 0;

class Alumno {
  
  constructor (nombre, apellido, edad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  
  nombreCompleto () {
    return this.nombre + ' ' + this.apellido
  }

  mostrarDataAlumno () {
    alert(
      'Nombre: ' + this.nombre + '\n' + 
      'Apellido: ' + this.apellido + '\n' +
      'Edad: ' + this.edad + '\n'
    )
  }
}

// Metodos de validacion de datos ingresados:
const validacion = {

  nombre: (input) => input.length < 3,

  apellido: (input) => input.length < 2,

  edad: (input) => isNaN(input) || input > 100,
}

// Funcion para ingresar datos de alumnos:
function ingresarDataAlumno (dato) {

  let input;
  
  do {
    input = prompt('Ingresar ' + dato + ' del alumno:')
  } while (validacion[dato](input));
  
  return input
}

// Funcion para crear un nuevo alumno:
function crearAlumno () {

  alumnos[index] = new Alumno();

  for (let dato of datos) {
    alumnos[index][dato] = ingresarDataAlumno(dato)
  }

  let nombreCompleto = alumnos[index].nombreCompleto()

  nombresAlumnos.push(nombreCompleto)

  alumnos[index].mostrarDataAlumno()

  index++
}

do { 

  crearAlumno()

} while (confirm("Desea ingresar otro alumno?"))


// Buscar alumno en la lista:

function chequearSiExiste (nombre) {
  return nombresAlumnos.includes(nombre)
}

function ingresarNombre () {

  let nombre = prompt("Ingrese el nombre y apellido del alumno que desea buscar:")
  
  if (chequearSiExiste(nombre)) {
    alert(nombre + " es alumno.")
  } else {
    alert(nombre + " no es alumno.")
  } 
}

do {
  
  ingresarNombre()

} while (confirm("Desea buscar otro alumno?"))



