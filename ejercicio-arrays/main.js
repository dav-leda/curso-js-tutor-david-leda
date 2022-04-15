
const datos = ['nombre', 'edad', 'mail']
let usuarios = [];
let index = 0;

class Usuario {
  
  constructor (nombre, edad, mail) {
    this.nombre = nombre;
    this.edad = edad;
    this.mail = mail;
  }
  
  mostrarDataUsuario () {
    alert(
      'Nombre: ' + this.nombre + '\n' + 
      'Edad: ' + this.edad + '\n' + 
      'Mail: ' + this.mail
    )
  }
}

function ingresarDataUsuario (dato) {

  let input;

  do {
    input = prompt("Ingrese su " + dato)
  } while (input == '');
  
  return input
}

function crearUsuario () {

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

alert('Usuarios: \n' + JSON.stringify(usuarios))
