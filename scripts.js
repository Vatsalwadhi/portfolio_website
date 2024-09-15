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
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const isActive = this.classList.contains('active');

        document.querySelectorAll('.project-card').forEach(c => c.classList.remove('active', 'close'));
        if (!isActive) {
            this.classList.add('active');
        }
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.project-card')) {
        document.querySelectorAll('.project-card').forEach(c => c.classList.remove('active'));
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(item => {
      item.addEventListener('click', function() {
          // Randomize the falling direction and rotation
          const randomX = `${Math.random() * 200 - 100}px`; // Random x direction within -100px to 100px
          const randomRotate = `${Math.random() * 60 - 30}deg`; // Random rotation within -30 to 30 degrees
          
          this.style.setProperty('--random-x', randomX);
          this.style.setProperty('--random-rotate', randomRotate);

          // Add active class to trigger animation
          this.classList.add('active');

          // Set timeout to reset the tile animation after it completes
          setTimeout(() => {
              this.classList.remove('active');
              this.style.setProperty('--random-x', '0');
              this.style.setProperty('--random-rotate', '0deg');
          }, 2000); // Duration should match the CSS animation duration
      });
  });
});

