//addevents

//al presionar el boton submit se va a agregar una tarea
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
        
    
        let formulario = document.querySelector('#tarea').value;
        
        crearPersonas(formulario);
        
        guardarBD();

        
        
        
    });

//al apretar click a los iconos se van a editar o eliminar dependiendo de el icono que presionemos
    document.addEventListener('DOMContentLoaded', leerBD);

    contenedorBD.addEventListener('click', (e) =>{
        e.preventDefault();
        
        
        if(e.target.innerHTML === 'delete'){
            eliminarDB();

        }
        else if(e.target.innerHTML === 'edit'){
            editarDB();
            
        }
        
    });