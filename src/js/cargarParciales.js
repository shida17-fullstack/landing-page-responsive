document.addEventListener("DOMContentLoaded", function () {
    cargarParciales("header", "/src/parciales/header.html");
    cargarParciales("beneficios", "/src/parciales/beneficios.html");
    cargarParciales("instructor", "/src/parciales/instructor.html");
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

