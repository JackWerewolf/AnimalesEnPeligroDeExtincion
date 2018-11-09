
const mail = document.getElementById('mail');
const donation = document.getElementById('donation')
const comments = document.getElementById('comments');


const submitInfo1 =  (event) =>{
    // Previene la recarga de la pagina por el formulario.
    event.preventDefault();
    console.log(mail.value);
    console.log(donation.value);
    console.log(comments.value);
}

boton.addEventListener('click', submitInfo1)