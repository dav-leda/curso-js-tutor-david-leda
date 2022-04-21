
// Array de datos a ingresar:
const datos = ['nombre', 'apellido', 'edad']

// Array donde ir guardando los alumnos:
const alumnos = [];

// Indice del array de alumnos:
let index = 0;

class Alumno {
  
  constructor (nombre, apellido, edad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = '';
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

  alumnos[index].nombreCompleto = alumnos[index].nombre + ' ' + alumnos[index].apellido;

  alumnos[index].mostrarDataAlumno()

  index++
}

do { 

  crearAlumno()

} while (confirm("Desea ingresar otro alumno?"))


// Buscar alumno en la lista.
// Si hay un alumno con ese nombre completo
// alumnos.find retorna el objeto entero con todas sus propiedades:

function chequearSiExiste (nombre) {
  return alumnos.find( alumno => {
    return alumno.nombreCompleto.toLowerCase() === nombre.toLowerCase()
  })
}

function ingresarNombre () {

  let nombre = prompt("Ingrese el nombre y apellido del alumno que desea buscar:")
  
  // Del objeto alumno obtengo la propiedad nombreCompleto:
  let chequeado = chequearSiExiste(nombre).nombreCompleto;

  // Si la propiedad existe, el alumno es parte de la lista de alumnos:
  if (chequeado) {
    alert(chequeado + " es alumno.")
  } else {
    alert(chequeado + " no es alumno.")
  } 
}

do {
  
  ingresarNombre()

} while (confirm("Desea buscar otro alumno?"))



