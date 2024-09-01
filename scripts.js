document.addEventListener('DOMContentLoaded', () => {
    const slideInElements = document.querySelectorAll('.slide-in');

    function checkVisibility() {
        slideInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Remove the class if it's out of view
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on load in case elements are already visible
});
window.addEventListener('scroll', () => {
    const introBg = document.querySelector('.intro-bg');
    if (window.scrollY > 50) { // Adjust value as needed
        introBg.classList.add('fade-out');
    } else {
        introBg.classList.remove('fade-out');
    }
});
