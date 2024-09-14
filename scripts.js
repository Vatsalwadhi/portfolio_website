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

  document.addEventListener('DOMContentLoaded', function () {
    const effect = document.querySelector('.effect');
    
    function adjustEffect() {
      const logoContainer = document.querySelector('.logo-container');
      const containerWidth = logoContainer.offsetWidth;
      const containerHeight = logoContainer.offsetHeight;
      
      // Adjust the size of the effect based on the logo container size
      effect.style.width = `${containerWidth * 0.2}px`;
      effect.style.height = `${containerHeight * 0.2}px`;
    }

    // Initial adjustment
    adjustEffect();

    // Adjust on window resize
    window.addEventListener('resize', adjustEffect);
  });

