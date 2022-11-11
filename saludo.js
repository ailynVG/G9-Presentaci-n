/*Permite usar utilidades para trabajar con eventos como crear, enviar y recibir eventos.*/
var eventos = require('events');

/* Se instancia un objeto de la clase "EventEmitter"*/
var EmisorEventos = eventos.EventEmitter; 
var manejador = new EmisorEventos();

/*Se genera un nuevo evento mediante el método "on()". 
Este evento es un "listener", es decir, escucha o espera que sea invocado 
por el emisor de eventos para ejecutar el código que contiene*/
manejador.on('saludo', function(nombre){ 
    console.log("Hola " + nombre); 
 }); 

/*Se invoca mediante el uso del método "emit()"" del manejador, 
el cual recibe como argumento el nombre del evento a ejecutar y los argumentos que este necesita*/
 manejador.emit('saludo', 'Mitzi'); 

/*Se Utiliza un "setInterval" para que se invoque al evento cada cierto tiempo*/
 setInterval(function(){ 
    manejador.emit('saludo', 'Mitzi'); 
 },1000);  