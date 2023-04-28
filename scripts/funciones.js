//se traen los datos desde el formulario
var nombre = document.getElementById("nombre");
var correo = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var boton = document.getElementById("enviar");

//Se crea evento para el botón enviar
boton.addEventListener("click",function(){
    if(nombre = "" ){
        alert("Debe incluir un nombre válido")
    }
    
}
)