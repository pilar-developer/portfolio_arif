document.addEventListener("DOMContentLoaded", function () {
const text = "Hello, Nama Saya Muhamad Arif";
const typingElement = document.getElementById("typing-text");
let index = 0;
let speed = 100; // kecepatan ketik (ms per huruf)

function typeEffect() {
    if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
    } else {
    // opsional: kedip kursor
    typingElement.classList.add("cursor");
    }
}

typeEffect();
});

const images = document.querySelectorAll(".certificate-img");
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

// Tampilkan gambar saat diklik
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        currentIndex = index;
    });
});

// Tutup modal
closeBtn.onclick = () => (modal.style.display = "none");

// Navigasi Next/Prev
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
};

// Tutup saat klik di luar gambar
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

// ========== EXPERIENCE & EDUCATION TAB ==========
const experienceBtn = document.getElementById("experienceBtn");
const educationBtn = document.getElementById("educationBtn");
const experienceContent = document.getElementById("experienceContent");
const educationContent = document.getElementById("educationContent");

if (experienceBtn && educationBtn && experienceContent && educationContent) {
  experienceBtn.addEventListener("click", () => {
    // Tampilkan Experience
    experienceContent.style.display = "block";
    educationContent.style.display = "none";

    // Ganti status tombol
    experienceBtn.classList.add("active");
    educationBtn.classList.remove("active");
  });

  educationBtn.addEventListener("click", () => {
    // Tampilkan Education
    educationContent.style.display = "block";
    experienceContent.style.display = "none";

    // Ganti status tombol
    educationBtn.classList.add("active");
    experienceBtn.classList.remove("active");
  });
}

// Tahun Otomatis
// Mengatur tahun otomatis di footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
