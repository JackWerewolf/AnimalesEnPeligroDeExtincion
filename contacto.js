
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const boton = document.getElementById('boton');


const submitInfo =  (event) =>{
    // Previene la recarga de la pagina por el formulario.
    event.preventDefault();
    console.log(mail.value);

    if(password.value === "java"){
        $('#correctModal').modal('show')
    } else if (password.value === ""){
        $('#errorModal').modal('show')
    } else {
        alert("contraseña incorrecta")
    }
    
    }


boton.addEventListener('click', submitInfo)