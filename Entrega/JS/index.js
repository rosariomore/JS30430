// Defino una clase para almacenar los usuarios a generarse - Solicitar al usuario datos personales 

alert ("Bienvenido a Entorno Turístico! Vamos a pedirte unos datos para registrarte");

class Usuario {
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }
}

const usuario = [];

function registro (){
    let nombre = prompt ("Ingresá tu Nombre y Apellido");
    let mail = prompt ("Ingresá tu e-mail");

    const login = new Usuario (nombre, mail);

    usuario.push(login);

    const mensaje = `Nombre: ${login.nombre}, Mail: ${login.mail}`;
    alert(mensaje);
}
    registro();

// Calcular el valor de la asistencia al viajero 
let destino = prompt ("Ingresá el destino de tu Viaje");
let AXA = prompt ("Ingresá el tipo de Asistencia que deseas contratar: Nacional, Nacional + Regional, América, Europa ó Resto del Mundo");

if (AXA == "Nacional, Nacional + Regional, América, Europa , Resto del Mundo"){
alert ("Cotizaremos su asistencia");
} else{
alert ("Ingrese una Asistencia Válida");
let AXA = prompt ("Ingresá el tipo de Asistencia que deseas contratar: Nacional, Nacional + Regional, América, Europa ó Resto del Mundo");
}

let viaje = parseInt (prompt ("Ingresá la cantidad de días de duración del viaje")); 

function consulta (viaje){
    alert (`Tu Asistencia al Viajero a cotizar es por: ${viaje} días, al destino: ${destino}`);
}
consulta (viaje);

function asistencia (viaje){
    alert ("El valor es $" + viaje * 550)
}
asistencia (viaje);

// Se le ofrece 50% OFF comprando hoy 

alert ("Comprá hoy y obtené un 50% OFF en tu Asistencia al Viajero");

let precio = parseInt (prompt ("Por Favor Ingresá el valor cotizado anteriormente, $:"));

const cotizacion = [];
function descuento (precio, descuento){
    return (precio * .50);
  }

 let precioFinal=descuento(precio);

alert("La cotización por tu Asistencia es $"+precioFinal);
