/* document.addEventListener("DOMContentLoaded", function () {
    cargarParciales("header", "/src/parciales/header.html");
    cargarParciales("beneficios", "/src/parciales/beneficios.html");
    cargarParciales("instructor", "/src/parciales/instructor.html");
    cargarParciales("temario", "/src/parciales/temario.html");
    cargarParciales("testimonios", "/src/parciales/testimonios.html");
    cargarParciales("footer", "/src/parciales/footer.html");

    // Nuevos parciales Rama cambios-header-instructor
    cargarParciales("header_cambios", "/src/parciales/header_cambios.html");
    cargarParciales("instructor_cambios", "/src/parciales/instructor_cambios.html");
});

function cargarParciales(seccionId, url) {
    var elemento = document.getElementById(seccionId);

    // Utilizar fetch para obtener el contenido del archivo
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Insertar el contenido en el elemento
            elemento.innerHTML = html;
        })
        .catch(error => console.error(`Error loading partial ${seccionId}: ${error}`));
}
 */
/* 
document.addEventListener("DOMContentLoaded", function () {
    var currentBranch = "cambios-header-instructor"; // Reemplazar con la lógica adecuada   
    console.log("Current Branch", currentBranch);

    if (currentBranch === "cambios-header-instructor") {
        // Lógica para la rama cambios-header-instructor
        cargarParciales("header_cambios", "/src/parciales/header_cambios.html");
        cargarParciales("instructor_cambios", "/src/parciales/instructor_cambios.html");
    } else {
        // Lógica para la rama principal
        cargarParciales("header", "/src/parciales/header.html");
        cargarParciales("instructor", "/src/parciales/instructor.html");
    }

    // Estos parciales se cargan en ambas ramas
    cargarParciales("beneficios", "/src/parciales/beneficios.html");
    cargarParciales("temario", "/src/parciales/temario.html");
    cargarParciales("testimonios", "/src/parciales/testimonios.html");
    cargarParciales("footer", "/src/parciales/footer.html");
});

function cargarParciales(seccionId, url) {
    var elemento = document.getElementById(seccionId);

    // Utilizar fetch para obtener el contenido del archivo
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Insertar el contenido en el elemento
            elemento.innerHTML = html;
        })
        .catch(error => console.error(`Error loading partial ${seccionId}: ${error}`));
}
 */
/* document.addEventListener("DOMContentLoaded", function () {
    var currentBranch = "cambios-header-instructor"; // Reemplazar con la lógica adecuada   
    console.log("Current Branch", currentBranch);

    if (currentBranch === "cambios-header-instructor") {
        // Lógica para la rama cambios-header-instructor
        cargarParciales("header_cambios", "/src/parciales/header_cambios.html");
        cargarParciales("instructor_cambios", "/src/parciales/instructor_cambios.html");
    } else {
        // Lógica para la rama principal
        cargarParciales("header", "/src/parciales/header.html");
        cargarParciales("instructor", "/src/parciales/instructor.html");
    }

    // Estos parciales se cargan en ambas ramas
    cargarParciales("beneficios", "/src/parciales/beneficios.html");
    cargarParciales("temario", "/src/parciales/temario.html");
    cargarParciales("testimonios", "/src/parciales/testimonios.html");
    cargarParciales("footer", "/src/parciales/footer.html");
});

function cargarParciales(seccionId, url) {
    var elemento = document.getElementById(seccionId);

    // Verificar si el elemento existe antes de intentar acceder a sus propiedades
    if (elemento) {
        // Utilizar fetch para obtener el contenido del archivo
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Insertar el contenido en el elemento
                elemento.innerHTML = html;
            })
            .catch(error => console.error(`Error loading partial ${seccionId}: ${error}`));
    } else {
        console.error(`Element with ID ${seccionId} not found.`);
    }
}





 */
/* document.addEventListener("DOMContentLoaded", function () {
    var currentBranch;
    console.log("Current Branch", currentBranch);

    // Obtener la rama actual utilizando comandos de Git
    fetch('/git-branch') // Debes configurar un servidor que maneje esta solicitud y devuelva la rama actual
        .then(response => response.text())
        .then(branch => {
            currentBranch = branch.trim();
            console.log("Current Branch", currentBranch);

            if (currentBranch === "cambios-header-instructor") {
                // Lógica para la rama cambios-header-instructor
                cargarParciales("header_cambios", "/src/parciales/header_cambios.html");
                cargarParciales("instructor_cambios", "/src/parciales/instructor_cambios.html");
            } else {
                // Lógica para la rama principal
                cargarParciales("header", "/src/parciales/header.html");
                cargarParciales("instructor", "/src/parciales/instructor.html");
            }

            // Estos parciales se cargan en ambas ramas
            cargarParciales("beneficios", "/src/parciales/beneficios.html");
            cargarParciales("temario", "/src/parciales/temario.html");
            cargarParciales("testimonios", "/src/parciales/testimonios.html");
            cargarParciales("footer", "/src/parciales/footer.html");
        })
        .catch(error => console.error(`Error getting current branch: ${error}`));
});

function cargarParciales(seccionId, url) {
    var elemento = document.getElementById(seccionId);

    // Verificar si el elemento existe antes de intentar acceder a sus propiedades
    if (elemento) {
        // Utilizar fetch para obtener el contenido del archivo
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Insertar el contenido en el elemento
                elemento.innerHTML = html;
            })
            .catch(error => console.error(`Error loading partial ${seccionId}: ${error}`));
    } else {
        console.error(`Element with ID ${seccionId} not found.`);
    }
}
 */
document.addEventListener("DOMContentLoaded", function () {
    // Obtén la rama actual directamente desde Git (sin depender del servidor)
    var currentBranch = "main"; // Cambia esto según tu lógica o necesidades

    console.log("Current Branch", currentBranch);

    if (currentBranch === "cambios-header-instructor") {
        // Lógica para la rama cambios-header-instructor
        cargarParciales("header_cambios", "/src/parciales/header_cambios.html");
        cargarParciales("instructor_cambios", "/src/parciales/instructor_cambios.html");
    } else {
        // Lógica para la rama principal
        cargarParciales("header", "/src/parciales/header.html");
        cargarParciales("instructor", "/src/parciales/instructor.html");
    }

    // Estos parciales se cargan en ambas ramas
    cargarParciales("beneficios", "/src/parciales/beneficios.html");
    cargarParciales("temario", "/src/parciales/temario.html");
    cargarParciales("testimonios", "/src/parciales/testimonios.html");
    cargarParciales("footer", "/src/parciales/footer.html");
});

function cargarParciales(seccionId, url) {
    var elemento = document.getElementById(seccionId);

    // Verificar si el elemento existe antes de intentar acceder a sus propiedades
    if (elemento) {
        // Utilizar fetch para obtener el contenido del archivo
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Insertar el contenido en el elemento
                elemento.innerHTML = html;
            })
            .catch(error => console.error(`Error loading partial ${seccionId}: ${error}`));
    } else {
        console.error(`Element with ID ${seccionId} not found.`);
    }
}
