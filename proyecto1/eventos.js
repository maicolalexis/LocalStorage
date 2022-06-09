formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    nombre = document.querySelector("#nombre").value;
    password = document.querySelector("#contraseña").value;
    crearPersonas(nombre, password);
    guardarBD();

});
document.addEventListener('DOMContentLoaded', leerBD);