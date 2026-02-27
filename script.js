// Typing Effect
const text = "Regional Silver Winner 🥈";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();


// 🎉 Simple Confetti Background
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFire(x, y) {
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: x,
            y: y,
            radius: Math.random() * 6 + 4,
            color: `hsl(${Math.random() * 30}, 100%, 50%)`,
            speedX: (Math.random() - 0.5) * 4,
            speedY: Math.random() * -6 - 2,
            life: 60
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    });

    requestAnimationFrame(animate);
}
animate();


// 🔥 Fire Sound
const fireSound = new Audio("fire.mp3"); 
fireSound.volume = 0.5;


// 📱 Touch + Click Event
function triggerFire(e) {
    let x, y;

    if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    createFire(x, y);

    fireSound.currentTime = 0;
    fireSound.play();
}

window.addEventListener("click", triggerFire);
window.addEventListener("touchstart", triggerFire);