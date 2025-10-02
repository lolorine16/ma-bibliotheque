// Animation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    
    // Animation de l'image principale
    const heroImage = document.getElementById('heroImage');
    
    // Déclenchement de l'animation avec un petit délai pour un effet plus smooth
    setTimeout(() => {
        if (heroImage) {
            heroImage.classList.add('animate');
        }
    }, 300);

    // Animation des éléments SVG individuels avec délais pour animation continue
    const svgElements = document.querySelectorAll('.svg-element');
    const svgStrokeElements = document.querySelectorAll('.svg-stroke-element');
    
    // Animation des éléments remplis avec délais décalés pour un effet de vague
    svgElements.forEach((element, index) => {
        // Délai initial puis ajout de délai pour décaler les animations
        element.style.animationDelay = `${index * 0.3}s`;
        setTimeout(() => {
            element.classList.add('animate');
        }, 800 + (index * 100));
    });
    
    // Animation des éléments avec stroke avec délais décalés
    svgStrokeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        setTimeout(() => {
            element.classList.add('animate');
        }, 1000 + (index * 150));
    });

    // Animation d'apparition progressive pour d'autres éléments
    const animateElements = document.querySelectorAll('.animate-on-load');
    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate');
        }, 200 + (index * 150));
    });
});

// Intersection Observer pour les animations au scroll (optionnel)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observer les éléments avec la classe scroll-animate
document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
});