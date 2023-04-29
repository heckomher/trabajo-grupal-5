//se traen los datos desde el formulario
var nombre = document.getElementById("nombre").value;
var correo = document.getElementById("email").value;
var mensaje = document.getElementById("mensaje").value;


//Se crea evento para el botón enviar
document.getElementById("contacto").addEventListener("submit",function(event){
    if(nombre == "" ){
        alert("Debe incluir un nombre válido")
    };
}
)