// Crear burbujas de fondo
for (let i = 0; i < 7; i++) {
    const b = document.createElement("div");
    const s = 80 + Math.random() * 150;
    b.className = "bubble";
    b.style.width = s + "px";
    b.style.height = s + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.top = Math.random() * 100 + "%";
    b.style.animationDelay = Math.random() * 8 + "s";
    document.body.appendChild(b);
}

// Función para scroll suave a secciones
function go(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Contador desde el 1 de septiembre 2024
function contar() {
    const inicio = new Date("2024-09-01T00:00:00");
    const ahora = new Date();
    const ms = ahora - inicio;

    const dias = Math.floor(ms / (1000 * 60 * 60 * 24));
    const horas = Math.floor(ms / (1000 * 60 * 60));
    const mins = Math.floor(ms / (1000 * 60));

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas.toLocaleString();
    document.getElementById("mins").textContent = mins.toLocaleString();
}

// Iniciar contador
contar();
setInterval(contar, 60000); // Actualizar cada minuto

// Función para crear corazones flotantes
function hearts() {
    const colors = ["💗", "💜", "💙", "💕", "💖"];
    for (let i = 0; i < 15; i++) {
        const h = document.createElement("div");
        h.textContent = colors[Math.floor(Math.random() * colors.length)];
        h.style.position = "fixed";
        h.style.fontSize = (1.6 + Math.random() * 1.8) + "em";
        h.style.left = (5 + Math.random() * 90) + "%";
        h.style.top = "102%";
        h.style.transition = "4s ease-out";
        h.style.pointerEvents = "none";
        h.style.zIndex = "9999";
        document.body.appendChild(h);

        setTimeout(() => {
            h.style.top = "-10%";
            h.style.opacity = "0";
            h.style.transform = `translateX(${Math.random() * 160 - 80}px) rotate(${Math.random() * 360}deg) scale(1.4)`;
        }, 100);
        
        setTimeout(() => h.remove(), 4200);
    }
}