// Animaciones y navegación suave

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Para páginas internas, pero si cambias de html, es recarga; podrías hacer tipo SPA si quieres
        });
    });

    const btnInicio = document.getElementById("btn-inicio");
    if (btnInicio) {
        btnInicio.addEventListener("click", function() {
            window.location.href = "historia.html";
        });
    }
});
