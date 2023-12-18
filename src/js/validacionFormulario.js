function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const compania = document.getElementById('compania').value.trim();
    const terms = document.getElementById('terms').checked;

    // Lógica de validación
    let isValid = true;

    if (!validarCampoTexto(nombre, 2, 30)) {
        mostrarError('nombreFeedback', 'El nombre debe tener entre 2 y 30 caracteres.');
        isValid = false;
    } else {
        ocultarError('nombreFeedback');
    }

    if (!validarCampoTexto(apellido, 2, 30)) {
        mostrarError('apellidoFeedback', 'El apellido debe tener entre 2 y 30 caracteres.');
        isValid = false;
    } else {
        ocultarError('apellidoFeedback');
    }

    if (!validarEmail(email)) {
        mostrarError('emailFeedback', 'Ingresa un correo electrónico válido.');
        isValid = false;
    } else {
        ocultarError('emailFeedback');
    }

    if (!validarTelefono(telefono)) {
        mostrarError('telefonoFeedback', 'Ingresa un número de teléfono válido.');
        isValid = false;
    } else {
        ocultarError('telefonoFeedback');
    }

    if (!validarCampoTexto(compania, 3, 50)) {
        mostrarError('companiaFeedback', 'La compañía debe tener entre 3 y 50 caracteres.');
        isValid = false;
    } else {
        ocultarError('companiaFeedback');
    }

    if (!terms) {
        mostrarError('termsFeedback', 'Debes aceptar los términos y condiciones.');
        isValid = false;
    } else {
        ocultarError('termsFeedback');
    }

    // Envía el formulario si es válido
    if (isValid) {
        document.getElementById('inscriptionForm').submit();
    }
}

function mostrarError(elementId, message) {
    const feedbackElement = document.getElementById(elementId);
    feedbackElement.innerHTML = message;
    feedbackElement.style.color = 'red';
}

function ocultarError(elementId) {
    const feedbackElement = document.getElementById(elementId);
    feedbackElement.innerHTML = '';
}

function validarCampoTexto(texto, minLength, maxLength) {
    // Valida que el texto tenga la longitud adecuada
    return texto.length >= minLength && texto.length <= maxLength;
}

function validarEmail(correo) {
    // Utiliza una expresión regular para validar el formato de correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function validarTelefono(telefono) {
    // Utiliza una expresión regular para validar el formato del número de teléfono
    // Acepta formatos como +1234567890, 1234567890, (123) 456-7890, 123-456-7890, etc.
    const regex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(telefono);
}



