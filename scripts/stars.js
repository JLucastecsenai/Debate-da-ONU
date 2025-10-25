document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.getElementById('stars');
    const starsCount = 150;

    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        // Tamanho aleatório entre 1 e 3 pixels
        const size = Math.random() * 2 + 1;

        // Duração da animação aleatória
        const duration = Math.random() * 5 + 5;

        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${Math.random() * duration}s`;

        starsContainer.appendChild(star);
    }
});