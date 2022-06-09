const contenedorBD = document.querySelector('#contenedorBD');

        let arrayFormulario = [];
        nombre.required = " ";

        const crearPersonas = (nom, pas) => {
            let item = {
                Nombre: nom,
                Password: pas
            }
            arrayFormulario.push(item);
            return item;
        }


        const guardarBD = () => {
    localStorage.setItem('tareas', JSON.stringify(arrayFormulario));
    leerBD();
    window.location.href = "";
    
}
//agregamos texto html desde el local storage
const leerBD = () => {
  contenedorBD.innerHTML = ' ';
    arrayFormulario = JSON.parse(localStorage.getItem('tareas'));
    if (arrayFormulario === null) {
        arrayFormulario = [];
    }else{
    arrayFormulario.forEach(element => {
        contenedorBD.innerHTML += `<b>${element.Nombre}</b> - <b>${element.Password}</b><br><br>`
    
    });
}
}