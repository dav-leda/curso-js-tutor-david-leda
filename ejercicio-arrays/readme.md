#### <ins> Curso JavaScript
Tutor: David Leda </ins>
<br><br><hr>

#### <ins> Ejercicio Arrays y Clases </ins>

1. Siempre que vean una repetición en el código busquen la forma de evitarla, usando funciones y Arrays. Por ejemplo, en vez de tener varios prompts pueden usar uno solo dentro de una función que tome como parámetros los datos que le vienen de un Array:

```js
const datos = ['nombre', 'edad', 'mail']

function ingresarDataUsuario(dato) {
  let input;
  do input = prompt("Ingrese su " + dato)
  while (input == '');
  return input
}

for (let dato of datos) {
  ingresarDataUsuario(dato)
}
```

2. Si están creando varias instancias de una misma clase, no es necesario crearlas una por una manualmente:

```js
let usuario1 = new Usuario();
let usuario2 = new Usuario();
let usuario3 = new Usuario();
// etc...
```
Pueden crear primero un array vacío y luego ir sumando al Array las instancias de la clase, referenciandolas por su posición en el Array:

```js
let usuarios = [];
let index = 0;

function crearUsuario () {

  usuarios[index] = new Usuario();

  for (let dato of datos) {
    usuarios[index][dato] = ingresarDataUsuario(dato)
  }

  usuarios[index].mostrarDataUsuario()

  index++
}

do crearUsuario()
while (confirm("Desea ingresar otro usuario?"));
```
<hr>

#### Acá arriba pueden encontrar el código completo en el archivo `main.js`