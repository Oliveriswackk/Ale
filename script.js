// Crear burbujas minimalistas de fondo
for (let i = 0; i < 10; i++) {
    const b = document.createElement("div");
    const s = 100 + Math.random() * 200;
    b.className = "bubble";
    b.style.width = s + "px";
    b.style.height = s + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.top = Math.random() * 100 + "%";
    b.style.animationDelay = Math.random() * 5 + "s";
    b.style.animationDuration = (8 + Math.random() * 7) + "s"; // más rápido
    document.body.appendChild(b);
}

// Función para scroll suave a secciones
function go(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Contador desde el 1 de septiembre 2025
function count() {
    const startDate = new Date("2025-09-01T00:00:00");
    const now = new Date();
    const diff = now - startDate; // diferencia en ms

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    // Calcular horas y minutos parciales
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;

    // Actualizar el DOM
    document.getElementById("dias").textContent = totalDays;
    document.getElementById("horas").textContent = hours;
    document.getElementById("mins").textContent = minutes;
}

// Iniciar contador y actualizar cada 30 segundos
count();
setInterval(count, 30000);

// Función para crear corazones flotantes
function hearts() {
    const colors = ["🩵", "💜", "🤍", "💫", "✨", "💙"];
    for (let i = 0; i < 10; i++) {
        const h = document.createElement("div");
        h.textContent = colors[Math.floor(Math.random() * colors.length)];
        h.style.position = "fixed";
        h.style.fontSize = (1.2 + Math.random() * 1) + "em";
        h.style.left = (10 + Math.random() * 80) + "%";
        h.style.top = "100%";
        h.style.transition = "all 3.5s ease-out";
        h.style.pointerEvents = "none";
        h.style.zIndex = "9999";
        h.style.opacity = "1.3";
        document.body.appendChild(h);

        setTimeout(() => {
            h.style.top = "-5%";
            h.style.opacity = "0";
            h.style.transform = `translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
        }, 100);
        
        setTimeout(() => h.remove(), 3700);
    }
}
