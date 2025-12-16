function toggleSkills(element) {
    const icons = element.querySelector('.skill-icons');
    const isOpen = icons.classList.contains('active');

    document.querySelectorAll('.skill-icons').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.services-list li').forEach(el => el.classList.remove('open'));

    if (!isOpen) {
        icons.classList.add('active');
        element.classList.add('open');
    }
}

// LANDING ANIMATION TRIGGER
window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Scroll to top on load
    const loader = document.getElementById('landing-loader');
    if (loader) {
        // Durée de l'animation totale (environ 2s) + petite pause
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2200);
    }
});
