document.addEventListener("DOMContentLoaded", function(){
    const waitForNavbar = function () {
        const navbar = document.getElementById("navbar");
        
        if (navbar) {
            console.log("Navbar encontrado", navbar);

            window.addEventListener("scroll", () => {
                const scrollThreshold = 100; // Ajusta el umbral de scroll aquí
                if (window.scrollY > scrollThreshold) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        } else {
            // Si el elemento no está presente, espera un tiempo y vuelve a intentarlo
            setTimeout(waitForNavbar, 100);
        }
    };

    // Inicia la espera para el elemento con ID "navbar"
    waitForNavbar();
});
