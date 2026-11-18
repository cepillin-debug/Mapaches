const carrusel = document.querySelector('.carrusel');
const slides = document.querySelectorAll('.slide');
let actual = 0;

function mostrar(n) {
    slides[actual].classList.remove('activa');
    actual = (n + slides.length) % slides.length;
    slides[actual].classList.add('activa');
}

carrusel.onclick = (e) => {
    const x = e.clientX - carrusel.getBoundingClientRect().left;
    if (x < carrusel.offsetWidth / 2) {
    mostrar(actual - 1);
    } else {
    mostrar(actual + 1);
    }
};