let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormualrio);

function validarFormualrio(e){
    e.preventDefault();
    if(e.target.children[0].value.includes("@")){   
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Bienvenido a Entorno Turístico";
        mensaje.className = "fuente"
        
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Ingrese un mail válido";
        document.body.append(mensaje);
        mensaje.className = "fuente"
        e.target.children[0].value = "";
    }
}






