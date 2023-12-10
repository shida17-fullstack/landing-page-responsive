document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM completamente cargado');
    var modal = document.getElementById('formularioModalContainer');
    var button = document.querySelector('button');
    if (modal && button) {
        console.log('Elemento del modal encontrado:', modal);
        button.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Botón de enviar clicado');
            // Cierra el modal después de enviar el formulario
            var modalInstance = new bootstrap.Modal(modal);
            modalInstance.hide();
        });
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                // Excluye el formulario del evento de clic interno del modal
                if (!event.target.closest('#inscriptionForm')) {
                    var modalInstance = new bootstrap.Modal(modal);
                    modalInstance.hide();
                }
            }
        });
    } else {
        console.error('Elemento del modal o botón de enviar no encontrado');
    }
});



