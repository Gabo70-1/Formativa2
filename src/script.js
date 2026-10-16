const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    alert(`¡Gracias ${nombre}! Tu informacion ha sido enviado con exito. Te hablaré a ${email} pronto :).`)

    formulario.reset();
})