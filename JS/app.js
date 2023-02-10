const modalImagen = document.querySelector('#modal-imagen');
const menu = document.querySelector('.navbar-menu');
const toggleButton = document.querySelector('.navbar-toggler');

if(modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function(event) {
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');
    
       // Construir la imagen
      const imagen = document.createElement('IMG');
        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galería';
    
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
    });
    
    modalImagen.addEventListener('hidden.bs.modal', function() {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  //Mostrar y ocultar menú
function ShowMenu(){
  

    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('show');
  
}

function HideMenu()
{
  const menu = document.querySelector('.navbar-menu');
  if (!menu.contains(event.target) && menu.classList.contains('show')) {
    menu.classList.remove('show');

  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 767.99 && menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});