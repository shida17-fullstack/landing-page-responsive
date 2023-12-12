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

document.addEventListener("DOMContentLoaded", function () {
    var currentBranch = "cambios-header-instructor"; // Reemplazar con la lógica adecuada

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
