document.addEventListener('DOMContentLoaded', function () {
    const waitForElement = function (selector, callback) {
        const interval = 100;
        const maxAttempts = 50;

        const checkElement = function () {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(checkInterval);
                callback(element);
            }
        };

        const checkInterval = setInterval(checkElement, interval);

        setTimeout(function () {
            clearInterval(checkInterval);
        }, interval * maxAttempts);
    };

    const loadImages = function (imageContainer, images, colors) {
        imageContainer.innerHTML = '';

        images.forEach((image, index) => {
            const container = document.createElement('div');
            container.classList.add('img-container');

            const imgElement = new Image();
            imgElement.src = image;
            imgElement.alt = `Descripción de la imagen ${index + 1}`;
            imgElement.style.width = '400px';
            imgElement.style.height = '400px';
            container.appendChild(imgElement);

            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.style.backgroundColor = colors[index];
            const radius = 200;
            circle.style.width = `${radius * 2}px`;
            circle.style.height = `${radius * 2}px`;
            imgElement.loading = 'lazy';
            container.appendChild(circle);

            imageContainer.appendChild(container);
        });
    };

    waitForElement('#img-box-inner', function (imageContainer) {
        const images = ['images/optimizadas/daniela.optimizado.svg', 'images/optimizadas/hanna.optimizada.svg', 'images/optimizadas/laura.optimizado.svg'];
        const colors = ['#fb9c9a', '#fbd39a', '#9ab0fb'];

        loadImages(imageContainer, images, colors);

        const myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'));

        myCarousel._element.addEventListener('slid.bs.carousel', function (event) {
            const newIndex = event.to;
            loadImages(imageContainer, [images[newIndex]], [colors[newIndex]]);
        });
    });
});
