const input = document.querySelector('tarea');
const formulario = document.querySelector('#formulario');
const contenedorBD = document.querySelector('#contenedorBD');
const editar = document.querySelector('#editar');
let arrayFormulario = [];
resuelta = false;
tarea.required = " ";




//creamos el array 
const crearPersonas = (tarea) => {
    let item = {
        tarea: tarea,
        resuelta: resuelta   
    }
    arrayFormulario.push(item);
    return item;
}

//guardamos el contenido del array en el localstorage
const guardarBD = () => {
    localStorage.setItem('tareas', JSON.stringify(arrayFormulario));
    leerBD();
    window.location.href = "/sistemaCrud";
    
}
//agregamos texto html desde el local storage
const leerBD = () => {
  contenedorBD.innerHTML = ' ';
    arrayFormulario = JSON.parse(localStorage.getItem('tareas'));
    if (arrayFormulario === null) {
        arrayFormulario = [];
    }else{
    arrayFormulario.forEach(element => {
        contenedorBD.innerHTML += `<div class="container bg-primary text-white"><i class="material-icons ">directions_walk</i><b class="ml-5"><b>${element.tarea}</b> - <b>${element.resuelta}</b><span class="float-right"><i class="material-icons mr-5">edit</i><i class="material-icons mr-5">delete</i></span></div>`
    
    });
}
}
//eliminamos un elemento del array
const eliminarDB = () =>{
  let indexarray;
  arrayFormulario.forEach((elemento, index) => {
    if (elemento.tarea === tarea){
      indexarray = index;  
    }
      
  });
  
  arrayFormulario.splice(indexarray,1);

  guardarBD();
  
}

//editamos un elemento del array
const editarDB = (index) =>{
 let indexArray = arrayFormulario.forEach((elemento, index)=>elemento.tarea === 
 tarea);
   console.log(indexArray);
}
