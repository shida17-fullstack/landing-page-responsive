// Obtener la rama actual desde la URL o configuración de tu sistema
/* var currentBranch = "main"; // Reemplazar con la lógica adecuada

// Definir un objeto que mapee las rutas de los estilos CSS para cada rama
var cssPaths = {
    "main": "/src/css/header.css",
    "cambios-header-instructor": {
        "main": "/src/css-cambios/header_cambios.css",
        "instructor": "/src/css-cambios/instructor_cambios.css"
    }
};

// Función para cargar un estilo CSS específico
function cargarEstilo(ruta) {
    var styleSheet = document.createElement("link");
    styleSheet.rel = "stylesheet";
    styleSheet.href = ruta;
    document.head.appendChild(styleSheet);
}

// En función de la rama actual, cargar los estilos correspondientes
if (currentBranch === "cambios-header-instructor") {
    cargarEstilo(cssPaths[currentBranch]["main"]);
    cargarEstilo(cssPaths[currentBranch]["instructor"]);
} else {
    cargarEstilo(cssPaths[currentBranch]);
}
 */
// Obtener la rama actual desde la URL o configuración de tu sistema
var currentBranch = "main"; // Reemplazar con la lógica adecuada

// Definir un objeto que mapee las rutas de los estilos CSS para cada rama
var cssPaths = {
    "main": ["/src/css/header.css", "/src/css/instructor.css"],
    "cambios-header-instructor": ["/src/css-cambios/header_cambios.css", "/src/css-cambios/instructor_cambios.css"]
};

// Función para cargar un estilo CSS específico
function cargarEstilos(rutas) {
    rutas.forEach(function (ruta) {
        var styleSheet = document.createElement("link");
        styleSheet.rel = "stylesheet";
        styleSheet.href = ruta;
        document.head.appendChild(styleSheet);
    });
}

// En función de la rama actual, cargar los estilos correspondientes
if (currentBranch === "cambios-header-instructor") {
    cargarEstilos(cssPaths[currentBranch]);
} else {
    cargarEstilos(cssPaths[currentBranch]);
}
