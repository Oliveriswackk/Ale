// Crear burbujas de fondo
function createBubbles() {
    const container = document.getElementById('bgElements');
    const sizes = [80, 120, 160, 200, 250];
    
    for (let i = 0; i < 6; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = Math.random() * 100 + '%';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        bubble.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(bubble);
    }
}

// Contador desde el 1 de septiembre 2025
function updateCounter() {
    const startDate = new Date('2025-09-01T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    document.getElementById('minutes').textContent = minutes.toLocaleString();
    document.getElementById('hours').textContent = hours.toLocaleString();
    document.getElementById('days').textContent = days.toLocaleString();
    document.getElementById('weeks').textContent = weeks.toLocaleString();
    document.getElementById('months').textContent = months.toLocaleString();
}

// Crear corazones flotantes
function createHearts() {
    const hearts = ['💗', '💜', '💙', '💕', '💖'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = (Math.random() * 2 + 1.5) + 'em';
        heart.style.left = (Math.random() * 90 + 5) + '%';
        heart.style.top = '100%';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 3s ease-out';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = '-10%';
            heart.style.opacity = '0';
            heart.style.transform = 'translateX(' + (Math.random() * 200 - 100) + 'px) rotate(' + (Math.random() * 360) + 'deg) scale(1.5)';
        }, 100);
        
        setTimeout(() => heart.remove(), 3100);
    }
}

// Scroll suave
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Inicializar
createBubbles();
updateCounter();
setInterval(updateCounter, 60000);
