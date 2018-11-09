
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const boton = document.getElementById('boton');


const submitInfo =  (event) =>{
    // Previene la recarga de la pagina por el formulario.
    event.preventDefault();
    console.log(mail.value);
    console.log(password.value);

}


boton.addEventListener('click', submitInfo)