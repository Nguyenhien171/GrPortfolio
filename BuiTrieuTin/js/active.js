// navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#bg-video");
  video.load();
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-menu ul li a");
  const sections = document.querySelectorAll("section");

  // --- Khi click vào link ---
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Bỏ active ở tất cả link
      navLinks.forEach((l) => l.classList.remove("active"));
      // Thêm active cho link được click
      link.classList.add("active");
    });
  });

  // --- Khi scroll ---
  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const target = link.getAttribute("href").replace("#", "");
      if (target === currentSection) {
        link.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-menu ul li a");
  const sections = document.querySelectorAll("section");
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  // Toggle menu khi click vào icon ba gạch
  menuToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  // Khi click vào link trong menu => ẩn menu (trên mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
    });
  });

  // --- Khi click vào link: giữ active ---
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // --- Khi scroll ---
  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const target = link.getAttribute("href").replace("#", "");
      if (target === currentSection) {
        link.classList.add("active");
      }
    });
  });
});

const swiper = new Swiper(".parallax-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1000,
});
