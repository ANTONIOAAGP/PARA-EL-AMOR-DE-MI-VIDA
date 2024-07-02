document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const pages = book.querySelectorAll('.page');
    let currentPage = 0;

    // Función para mostrar la página actual
    function showPage(pageNumber) {
        pages.forEach((page, index) => {
            if (index === pageNumber) {
                page.classList.add('visible');
            } else {
                page.classList.remove('visible');
            }
        });
    }

    // Escuchar evento de click en la portada para abrir el libro
    document.querySelector('.book-cover').addEventListener('click', function() {
        book.classList.toggle('open');
        showPage(currentPage); // Mostrar la página actual al abrir el libro
    });

    // Escuchar evento de click para avanzar página
    document.querySelector('.next-page').addEventListener('click', function() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Escuchar evento de click para retroceder página
    document.querySelector('.prev-page').addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelector('.stars');

    // Crear estrellas aleatorias y añadirlas al fondo
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Duración de la animación aleatoria
        stars.appendChild(star);
    }
});
