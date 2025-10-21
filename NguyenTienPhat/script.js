// 🌟 Hiệu ứng gõ chữ cho phần banner
const text = "Lập Trình Viên Frontend";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// 🌈 Hiệu ứng xuất hiện khi cuộn
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 1s ease";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    }
  });
});

// 🔼 Nút trở về đầu trang
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// 💻 Hiệu ứng nền Matrix
const canvas = document.getElementById("matrixBackground");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
