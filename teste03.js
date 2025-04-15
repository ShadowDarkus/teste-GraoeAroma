// Toggle do menu mobile
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show-links');
});

// Animação de fade-in ao rolar
function checkFade() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.8;

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);