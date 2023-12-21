# Acerca de

Este proyecto de Landing Page está diseñado para la venta de un Curso Digital de Finanzas dirigido a emprendedores. La página es completamente responsive y utiliza Bootstrap 5 para facilitar el desarrollo y mejorar la experiencia del usuario en diferentes dispositivos.

## Contenido - Carpetas y Archivos

- **`landing-page/`** Carpeta principal que contiene todo el proyecto.
  - **`index.html`:** Archivo principal que contiene la estructura de la landing page. **MODIFICADO**. Se cambió el orden de las secciones header e instructor. Se agregó nuevas fuentes Roboto Condensed y Satisfy:
  - **`css/`:** Carpeta que almacena los estilos CSS del proyecto.**MODIFICADO**. Se modificaron los estilos de los parciales `header.css` y `instructor.css`, así como las media queries.
      - `estilos.css`: Archivo principal de estilos CSS.
      - `footer.css`: Archivo de estilos CSS del parcial footer.html.
      - `header.css`: Archivo de estilos CSS del parcial header.html. **MODIFICADO**. 
      - `instructor.css`: Archivo de estilos CSS del parcial instructor.html. **MODIFICADO**.
      - `temario.css`: Archivo de estilos CSS del parcial temario.html.
      - `testimonios.css`: Archivo de estilos CSS del parcial testimonios.html.
      - `beneficios.css`: Archivo de estilos CSS del parcial testimonios.html.
      - `bootstrap.min.css`: Archivo de estilos CSS de Bootstrap 5.
      - `fontawesome.min.css`: Archivo de estilos del paquete de fuentes y estilos de Fontawesome.
      - `media-queries.css`: Archivo de estilos CSS para Responsive Design. Modificado
  - **`fonts/`:** Almacena las fuentes utilizadas en el proyecto.
      - **`webfonts/`:** Carpeta con las fuentes web de Fontawesome.  
  - **`js/`:** Carpeta que almacena los archivos JavaScript.
      - `bootstrap.bundle.min.js`: Archivo Javascript Bootstrap 5.
      - `cargarImg.js`: Archivo Javascript para cargar imágenes y círculos de colores de Carousel.
      - `cargarParciales.js`: Archivo Javascript para cargar parciales HTML.
      - `formularioModal.js`: Archivo Javascript del formulario Modal.
      - `navbarScrolled.js`: Archivo Javascript para el efecto de Scroll en el Navbar con cambio de Background-color. 
      - `validacionFormulario.js`: Archivo Javascript para la validación de campos en el formulario Modal.
  - **`images/`:** Carpeta para imágenes y recursos multimedia.
      - **`capturas/`:** Carpeta con capturas de imágenes SVG de la Landing Page a pantalla completa. **MODIFICADO**. Se agregó  capturaLanding_modificada.optimizado.svg.
      - **`muestras/`:** Carpeta con imágenes de muestras y paleta de colores propuesta y usada en la Landing Page. Extensiones SVG optimizadas con SVGO. **MODIFICADO**. Se agregó paletaColores_modificada.optimizado.svg
      - **`optimizadas/`:** Carpeta con imágenes optimizadas con SVGO usadas en la Landing Page. **MODIFICADO**. Se agregaron carolina_optimizado.svg y fondo_azul_optimizado.svg
      - **`testing/`:** Carpeta con capturas de imágenes de Testeo en dispositivos móviles. **MODIFICADO**. Se agregaron captura_375.optimizado.svg, captura_412_2.optimizado.svg, captura_768.optimizado.svg y captura_1024.optimizado.svg
  - **`parciales/`:** Almacena archivos HTML parciales reutilizables.
    - `header.html`: Encabezado de la página. **MODIFICADO**
    - `footer.html`: Pie de página.
    - `beneficios.html`: Sección Beneficios HTML.
    - `instructor.html`: Sección Instructor HTML. **MODIFICADO**
    - `temario.html`: Sección Temario HTML.
    - `testimonios.html`: Sección Testimonios HTML.
  - **`LICENSE.md`:** Archivo que especifica los términos de la licencia del proyecto.
  - **`README.md`:** Este archivo proporciona información sobre el proyecto.**MODIFICADO**

## Estructura del Proyecto

```markdown

|-- landing-page
|   |-- src
|   |   |-- css
|   |   |   |-- beneficios.css
|   |   |   |-- bootstrap.min.css
|   |   |   |-- estilos.css
|   |   |   |-- fontawesome.min.css
|   |   |   |-- footer.css
|   |   |   |-- header.css
|   |   |   |-- instructor.css
|   |   |   |-- temario.css
|   |   |   |-- testimonio.css
|   |   |   |-- media-queries.css
|   |   |-- fonts
|   |   |   |-- webfonts
|   |   |-- images
|   |   |   |-- muestras
|   |   |   |   |-- muestra.svg
|   |   |   |   |-- muestra.svg
|   |   |   |   |-- muestra.svg
|   |   |   |   |-- muestra.svg
|   |   |   |   |-- paleta.svg
|   |   |   |   |-- paleta.svg
|   |   |   |   |-- paleta.svg
|   |   |   |   |-- paleta.svg
|   |   |   |   |-- paleta.svg
|   |   |   |-- optimizadas
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
!   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
!   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |   |-- optimizado.svg
|   |   |   |-- capturas
|   |   |   |   |-- full_screen-landing.optimizado.svg
|   |   |   |   |-- capturaLanding_modificada.optimizado.svg
|   |   |   |-- testing
|   |   |   |   |-- 320.optimizado.svg
|   |   |   |   |-- 375.optimizado.svg
|   |   |   |   |-- 375.optimizado.svg
|   |   |   |   |-- 640.optimizado.svg
|   |   |   |   |-- 684.optimizado.svg
|   |   |   |   |-- 734.optimizado.svg
|   |   |   |   |-- 992.optimizado.svg
|   |   |   |   |-- 1024.optimizado.svg
|   |   |   |   |-- 1024.optimizado.svg
|   |   |   |   |-- 1024.optimizado.svg
|   |   |   |   |-- 1024.optimizado.svg
|   |   |   |   |-- 1024.optimizado.svg
|   |   |   |   |-- 1024.optimizado.svg
|   |   |   |   |-- 1201.optimizado.svg
|   |   |   |   |-- 1280.optimizado.svg
|   |   |   |   |-- captura_375.optimizado.svg
|   |   |   |   |-- captura_412_2.optimizado.svg
|   |   |   |   |-- captura_768.optimizado.svg
|   |   |   |   |-- captura_1024.optimizado.svg
|   |   |-- js
|   |   |   |-- bootstrap.bundle.min.js
|   |   |   |-- cargarImg.js
|   |   |   |-- cargarParciales.js
|   |   |   |-- formularioModal.js
|   |   |   |-- navbarScrolled.js
|   |   |   |-- validacionFormulario.js
|   |   |-- parciales
|   |   |   |-- beneficios.html
|   |   |   |-- footer.html
|   |   |   |-- header.html
|   |   |   |-- instructor.html
|   |   |   |-- temario.html
|   |   |   |-- testimonios.html
|   |   |-- index.html
|-- LICENSE.md
|-- README.md

```
**Nota sobre nombres de imágenes:**
Por cuestiones de brevedad, algunos nombres de imágenes en el acapite Estructura del Proyecto pueden estar incompletos. Se recomienda dirigirse a la carpeta [images](/src/images/) o ver item ## Capturas de Pantalla para obtener detalles específicos sobre cada imagen.

## Fuentes Utilizadas

En este proyecto, se han utilizado las siguientes fuentes:

- **Font Awesome:** Conjunto de iconos vectoriales y logotipos, ampliamente utilizado para agregar iconografía a proyectos web.
  - Sitio web: [Font Awesome](https://fontawesome.com/)

- **Roboto Condensed:** Fuente sans-serif diseñada por Google. Se ha utilizado para la tipografía en este proyecto.
  - Sitio web: [Google Fonts - Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)

- **Satisfy:** Fuente script diseñada por Sideshow. Se ha utilizado para la tipografía en este proyecto.
  - Sitio web: [Google Fonts - Satisfy](https://fonts.google.com/specimen/Satisfy)



## Capturas de Pantalla **MODIFICADO**

### Capturas Landing Page Full Screen
1. ![Captura 1](/src/images/capturas/capturaLanding_modificada.optimizado.svg)

### Capturas Desktop y Mobile

| N° | Descripción | Enlace |

| 1 | 375px Iphone Expensive Portrait| ![Enlace](/src/images/testing/captura_375.optimizado.svg) |
| 2 | 412px Android Pixel 2 Portrait| ![Enlace](/src/images/testing/captura_412_2.optimizado.svg) |
| 3 | 768px Ipad Portrait| ![Enlace](/src/images/testing/captura_768.optimizado.svg) |
| 4 | 1024px Ipad Landscape| ![Enlace](/src/images/testing/captura_1024.optimizado.svg) |

**Nota:** Estas capturas de pantalla pertenecen a la rama `cambios-header-instructor`. Para obtener más detalles sobre el resto de las imágenes que se muestran en este proyecto y en la estructura de la landing, consulta la rama principal `main`.(https://github.com/shida17-fullstack/landing-page-responsive.git)

### Herramientas Test Mobile
- **Responsinator:** Utilizado para simular la visualización en varios dispositivos móviles.
- **Responsive Test Tools:** Herramienta adicional para simular y evaluar la capacidad de respuesta del diseño en diferentes tamaños de pantalla.
- **Dev Tools Google Chrome:** Utilizado para inspeccionar y ajustar la apariencia en el navegador Chrome.


## Licencia

Este proyecto está bajo la Licencia (Versión Limitada) - ver el archivo LICENSE.md para más detalles.

## Última Modificación

Este README fue modificado por última vez el 18/12/23 por shyda17-fullstack.

## Caracteristicas - Información Adicional
La Landing Page utiliza Bootstrap 5, HTML5, Javascript y SVGO para facilitar el diseño responsive.
Se recomienda revisar y personalizar los estilos y contenidos según las necesidades específicas del curso digital y la audiencia objetivo.
¡Gracias por elegir este proyecto! ¡Buena suerte con la venta del Curso Digital de Finanzas para emprendedores! 🚀
