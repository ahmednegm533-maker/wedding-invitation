// ---- Open invitation ----
const cover = document.getElementById('cover');
const openBtn = document.getElementById('open-btn');

const music = document.getElementById("bg-music");

openBtn.addEventListener("click", () => {
    cover.classList.add("hidden");

    music.play().catch(() => {
        console.log("Music autoplay blocked");
    });
});
// ---- Falling petals ----
const petalLayer = document.getElementById('petal-layer');
for (let i = 0; i < 14; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (9 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.opacity = 0.2 + Math.random() * 0.3;
  petalLayer.appendChild(p);
}

// ---- Countdown ----
// Wedding date/time — edit this line if the date or time changes
const weddingDate = new Date('2026-08-06T19:00:00');

function updateCountdown() {
  const now = new Date();
  let diff = weddingDate - now;
  if (diff < 0) diff = 0;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
  document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ---- RSVP via WhatsApp ----
document.getElementById('rsvp-btn').addEventListener('click', () => {
  const msg = "Hi! I'd love to confirm my attendance at Ahmed & Abla's wedding on August 6th, 2026.";
  window.open('https://wa.me/201017012784?text=' + encodeURIComponent(msg), '_blank');
});
