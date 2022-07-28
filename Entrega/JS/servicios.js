let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormualrio);

function validarFormualrio(e){
    e.preventDefault();
    if(e.target.children[0].value.includes("@")){   
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Bienvenido a Entorno Turístico!"; 
        mensaje.className = "col-md text-ligth p-2 text-center servicios"
        
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Ingrese un mail válido";
        document.body.append(mensaje);
        mensaje.className = "col-md text-ligth p-2 text-center errors"
        e.target.children[0].value = "";
    }
}






