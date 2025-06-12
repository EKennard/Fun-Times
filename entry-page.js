document.querySelector('.enter-site').addEventListener('mousemove', (event) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Position the sparkle near the cursor
    sparkle.style.left = `${event.clientX + Math.random() * 20 - 10}px`;
    sparkle.style.top = `${event.clientY + Math.random() * 20 - 10}px`;

    document.body.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 800);
});