// Import Animate.css properly
import 'animate.css';

// Add event</meta> listener for scroll events
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Get animation from data attribute
        const animationName = element.dataset.animation || 'fadeIn';

        // Check if the element is in the viewport
        if (elementTop < windowHeight - 100) {
            // Add specific animation when visible
            if (!element.classList.contains('animate__animated')) {
                element.classList.add('animate__animated', `animate__${animationName}`);
            }
        } else {
            // Remove animation if out of viewport
            element.classList.remove('animate__animated', `animate__${animationName}`);
        }
    });
});
