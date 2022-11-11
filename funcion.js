/*interfaz de programación de aplicacion que escucha la entrada del usuario 
y permite escuchar ambos eventos*/
process.stdin.resume();
/*Hace que la interfaz reciba parametros String del código ascci*/
process.stdin.setEncoding('ascii');

/*Se declara una función "saludar" que recibe un parámetro(nombre)*/
function saludar(nombre) {
    /*Muestra en consola la palabra Hola y la concatena al valor del parámetro nombre*/
   console.log('Hola ' + nombre); 
}

/*Se declara una función "pedirNombre" que recibe un parámetro(callback)*/
function pedirNombre(callback) {
    /*Se muestra en consola el texto*/
   console.log("Escribe tu nombre: ");
   /*Almacena el valor que el usuario asigne en un parámetro line y 
   lo manda a la función "callback" para que esta se lo mande a la función "saludar"*/
   process.stdin.on('data', function (line) {
      callback(line);
      process.exit();
   });
}

/*Se manda a llamar la función "pedirNombre" con el parámetro "saludar"*/
pedirNombre(saludar);