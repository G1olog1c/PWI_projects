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

// Close menu when a nav link is clicked
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
   API — LOAD CARS DYNAMICALLY
================================ */
const API_URL = "http://localhost:3000/api";

async function loadFeaturedCars() {
  const grid = document.getElementById("cars-grid");

  try {
    const response = await fetch(`${API_URL}/cars/featured`);

    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }

    const cars = await response.json();

    // Clear loading state
    grid.innerHTML = "";

    // Render each car card
    cars.forEach((car) => {
      const card = document.createElement("article");
      card.className = "car-card";
      card.innerHTML = `
        <img
          src="${API_URL.replace("/api", "")}/images/${car.image}"
          alt="${car.name} — ${car.origin} sports car"
          width="400"
          height="260"
          loading="lazy"
        >
        <div class="car-card__body">
          <h3 class="car-card__title">${car.name}</h3>
          <p class="car-card__text">${car.description}</p>
          <a href="#" class="btn btn--outline">Read More</a>
        </div>
      `;
      grid.appendChild(card);
    });
  } catch (error) {
    grid.innerHTML = `
      <div class="cars__error">
        Failed to load cars. Make sure the server is running.
      </div>
    `;
    console.error("Error loading cars:", error);
  }
}

// Load cars when page is ready
document.addEventListener("DOMContentLoaded", loadFeaturedCars);

/* ================================
   API — CONTACT FORM
================================ */
const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = contactForm.querySelector("#name").value.trim();
  const email = contactForm.querySelector("#email").value.trim();
  const message = contactForm.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
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

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    contactForm.reset();
    alert("Message sent! We will get back to you soon.");
  } catch (error) {
    alert("Failed to send message. Make sure the server is running.");
    console.error("Error sending message:", error);
  }
});
