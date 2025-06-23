
// Fundo estrelado animado com Canvas

const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
const numStars = 200;

function init() {
  resize();
  createStars();
  animate();
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
      delta: 0.01 + Math.random() * 0.02
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let star of stars) {
    star.alpha += star.delta;
    if (star.alpha <= 0) {
      star.alpha = 0;
      star.delta = -star.delta;
    } else if (star.alpha >= 1) {
      star.alpha = 1;
      star.delta = -star.delta;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resize();
  createStars();
});

// Inicializa o fundo estrelado
init();


// Controle do botão e áudio

const btnOracao = document.getElementById('btnOracao');
const audioReflexao = document.getElementById('audioReflexao');

btnOracao.addEventListener('click', () => {
  if (audioReflexao.paused) {
    audioReflexao.play();
    btnOracao.textContent = "Pausar oração/reflexão";
  } else {
    audioReflexao.pause();
    btnOracao.textContent = "Clique para oração/reflexão";
  }
});
const versiculos = [
  "Salmos 23:1 – O Senhor é o meu pastor...",
  "João 3:16 – Porque Deus amou o mundo...",
  "Isaías 41:10 – Não temas, porque eu sou contigo..."
];

document.getElementById("versiculo").innerText = versiculos[Math.floor(Math.random() * versiculos.length)];
