/* ================================
   HAMBURGER MENU
================================ */
const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
  });
});

/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    const headerHeight = document.querySelector(".header").offsetHeight;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  });
});

/* ================================
   HEADER — hide/show on scroll
================================ */
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});

/* ================================
   ACTIVE NAV LINK on scroll
================================ */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav__links a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

/* ================================
   API — CAROUSEL
================================ */
const API_URL = "http://localhost:3000/api";

let currentIndex = 0;
const visibleCount = 3;
let allCars = [];
let isAnimating = false;

function getVisibleCount() {
  const width = window.innerWidth;
  if (width <= 768) return 1;
  if (width <= 1024) return 2;
  return 3;
}

function getVisibleCount() {
  const width = window.innerWidth;
  if (width <= 768) return 1;
  if (width <= 1024) return 2;
  return 3;
}

function getSlideStep() {
  const grid = document.getElementById("cars-grid");
  const visible = getVisibleCount();
  const gap = parseFloat(getComputedStyle(grid).gap) || 32;
  const containerWidth = grid.parentElement.offsetWidth;
  const cardWidth = (containerWidth - gap * (visible - 1)) / visible;
  return cardWidth + gap;
}

function renderCarousel() {
  const grid = document.getElementById("cars-grid");
  const slideStep = getSlideStep();
  grid.style.transition = "transform 0.5s ease";
  grid.style.transform = `translateX(-${currentIndex * slideStep}px)`;
}

function goToNext() {
  if (isAnimating) return;
  isAnimating = true;

  const grid = document.getElementById("cars-grid");
  const slideStep = getSlideStep();

  currentIndex++;
  grid.style.transition = "transform 0.5s ease";
  grid.style.transform = `translateX(-${currentIndex * slideStep}px)`;

  if (currentIndex >= allCars.length) {
    setTimeout(() => {
      grid.style.transition = "none";
      currentIndex = 0;
      grid.style.transform = `translateX(0px)`;
      isAnimating = false;
    }, 500);
  } else {
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }
}

function goToPrev() {
  if (isAnimating) return;
  isAnimating = true;

  const grid = document.getElementById("cars-grid");
  const slideStep = getSlideStep();

  if (currentIndex <= 0) {
    grid.style.transition = "none";
    currentIndex = allCars.length;
    grid.style.transform = `translateX(-${currentIndex * slideStep}px)`;

    setTimeout(() => {
      currentIndex--;
      grid.style.transition = "transform 0.5s ease";
      grid.style.transform = `translateX(-${currentIndex * slideStep}px)`;
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }, 20);
  } else {
    currentIndex--;
    grid.style.transition = "transform 0.5s ease";
    grid.style.transform = `translateX(-${currentIndex * slideStep}px)`;
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }
}

function createCard(car) {
  const card = document.createElement("article");
  card.className = "car-card";
  card.innerHTML = `
    <img
      src="http://localhost:3000/images/${car.image}"
      alt="${car.name} — ${car.origin} sports car"
      width="400"
      height="260"
      loading="lazy"
    >
    <div class="car-card__body">
      <h3 class="car-card__title">${car.name}</h3>
      <p class="car-card__text">${car.description}</p>
      <button class="btn btn--outline car-card__btn" data-id="${car.id}">Read More</button>
    </div>
  `;
  return card;
}

async function loadCars() {
  const grid = document.getElementById("cars-grid");

  try {
    const response = await fetch(`${API_URL}/cars`);
    if (!response.ok) throw new Error("Failed to fetch cars");

    allCars = await response.json();
    grid.innerHTML = "";

    // Render all real cards
    allCars.forEach((car) => {
      grid.appendChild(createCard(car));
    });

    // Add cloned first 3 cards at the end to prevent gap
    allCars.slice(0, visibleCount).forEach((car) => {
      const clone = createCard(car);
      clone.setAttribute("aria-hidden", "true");
      grid.appendChild(clone);
    });

    renderCarousel();

    document
      .getElementById("carousel-prev")
      .addEventListener("click", goToPrev);
    document
      .getElementById("carousel-next")
      .addEventListener("click", goToNext);

    // Read More modal
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".car-card__btn");
      if (!btn) return;
      const carId = btn.getAttribute("data-id");
      const car = allCars.find((c) => c.id == carId);
      if (car) openModal(car);
    });
  } catch (error) {
    grid.innerHTML = `
      <div class="cars__error">
        Failed to load cars. Make sure the server is running.
      </div>
    `;
    console.error("Error loading cars:", error);
  }
  window.addEventListener("resize", () => {
    currentIndex = 0;
    renderCarousel();
  });
}

document.addEventListener("DOMContentLoaded", loadCars);

/* ================================
   API — CONTACT FORM
================================ */
const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = contactForm.querySelector("#name").value.trim();
  const email = contactForm.querySelector("#email").value.trim();
  const message = contactForm.querySelector("#message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (name.length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) throw new Error("Failed to send message");

    contactForm.reset();
    alert("Message sent! We will get back to you soon.");
  } catch (error) {
    alert("Failed to send message. Make sure the server is running.");
    console.error("Error sending message:", error);
  }
});

/* ================================
   MODAL — CAR DETAILS
================================ */
function openModal(car) {
  const existing = document.getElementById("car-modal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "car-modal";
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <button class="modal__close" aria-label="Close modal">&times;</button>
      <img
        src="http://localhost:3000/images/${car.image}"
        alt="${car.name}"
        class="modal__image"
      >
      <div class="modal__body">
        <h2 class="modal__title">${car.name}</h2>
        <p class="modal__description">${car.description}</p>
        <div class="modal__specs">
          <div class="modal__spec">
            <span class="modal__spec-label">Year</span>
            <span class="modal__spec-value">${car.year}</span>
          </div>
          <div class="modal__spec">
            <span class="modal__spec-label">Origin</span>
            <span class="modal__spec-value">${car.origin}</span>
          </div>
          <div class="modal__spec">
            <span class="modal__spec-label">Engine</span>
            <span class="modal__spec-value">${car.engine}</span>
          </div>
          <div class="modal__spec">
            <span class="modal__spec-label">Power</span>
            <span class="modal__spec-value">${car.power} hp</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  setTimeout(() => modal.classList.add("modal--visible"), 10);

  modal.querySelector(".modal__close").addEventListener("click", closeModal);
  modal.querySelector(".modal__overlay").addEventListener("click", closeModal);

  document.addEventListener("keydown", handleEscape);
}

function closeModal() {
  const modal = document.getElementById("car-modal");
  if (!modal) return;
  modal.classList.remove("modal--visible");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleEscape);
  setTimeout(() => modal.remove(), 300);
}

function handleEscape(e) {
  if (e.key === "Escape") closeModal();
}
