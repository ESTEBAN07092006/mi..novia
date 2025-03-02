// Mostrar mensaje sorpresa
function mostrarSorpresa() {
    document.getElementById("sorpresa").style.display = "block";
}

// Animación de corazones flotantes
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);
