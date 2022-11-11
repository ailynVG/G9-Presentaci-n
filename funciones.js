/* Declarando la función 'miFuncion' */
function miFuncion(elobjeto){
  elobjeto.marca= "Toyota";
}

/*
 * Declarando la variable 'miCarro';
 * Se crea e inicializa el nuevo objeto;
 * para hacer referencia a él mediante 'miCarro'
 */
var miCarro = {
  marca: "Honda",
  modelo: "Accord",
  año: 1998
};

/* Mostrando 'Honda' */
window.alert(miCarro.marca);

/* Paso por referencia del objeto 'miCarro' a la función 'miFuncion'*/
miFuncion(miCarro);

/*
 * Muestra 'Toyota' como valor de la propiedad 'marca'
 * del objeto, que ha sido cambiado por la función.
 */
window.alert(miCarro.marca);