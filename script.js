// =============================================================================
// Studio Bot Website - Main JavaScript
// =============================================================================

// Parallax effect for messages
function initParallax() {
    const chat = document.querySelector('.chat');
    const parallaxMessages = document.querySelectorAll('.parallax-message');
    let mouseX = 0;
    let mouseY = 0;
    const defaultMaxMove = 10;
    let isMouseInside = true;

    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        mouseX = (dx / centerX) * defaultMaxMove;
        mouseY = (dy / centerY) * defaultMaxMove;
    });

    document.addEventListener('mouseleave', () => {
        isMouseInside = false;
    });

    document.addEventListener('mouseenter', () => {
        isMouseInside = true;
    });

    function animate() {
        parallaxMessages.forEach(msg => {
            const isHorizontal = msg.classList.contains('horizontal');
            const moveFactor = isHorizontal ? 0.3 : 1;
            const currentTransform = msg._currentTransform || { x: 0, y: 0 };
            const targetX = isMouseInside ? (mouseX * moveFactor) : 0;
            const targetY = isMouseInside ? (mouseY * moveFactor) : 0;

            // interpolate smoothly
            const newX = currentTransform.x + (targetX - currentTransform.x) * 0.1;
            const newY = currentTransform.y + (targetY - currentTransform.y) * 0.1;

            msg._currentTransform = { x: newX, y: newY };
            msg.style.transform = `translate(${newX.toFixed(2)}px, ${newY.toFixed(2)}px)`;
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// Animate numbers with counting effect
function animateNumbers() {
    const elements = document.querySelectorAll('.animate-number');

    elements.forEach(el => {
        const rawValue = el.dataset.animate.replace(/\s/g, '');
        const finalValue = parseFloat(rawValue);
        if (isNaN(finalValue)) return;

        const isInteger = Number.isInteger(finalValue);
        const duration = 1500;
        const startTime = performance.now();

        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const interpolated = finalValue * easedProgress;

            if (isInteger) {
                el.textContent = Math.round(interpolated).toLocaleString('ru-RU');
            } else {
                el.textContent = interpolated.toFixed(1).replace('.', ',');
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// Initialize all functionality when DOM is loaded
function initApp() {
    // Initialize parallax effect
    initParallax();

    // Initialize number animations
    animateNumbers();

    // Add any additional initialization here
    console.log('Studio Bot Website initialized successfully! 🚀');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM is already loaded
    initApp();
}

// Export functions for potential external use
window.StudioBot = {
    initParallax,
    animateNumbers,
    initApp
};
