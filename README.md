# Revline — Car Enthusiast Magazine

A responsive website for automotive enthusiasts with a Node.js backend and SQLite database.
Revline is an online magazine dedicated to iconic car builds, raw stories, and authentic car culture.

---

## Folder Structure

    revline/
    ├── index.html               — Main HTML file
    ├── css/
    │   ├── style.css            — Main styles and CSS variables
    │   └── responsive.css       — Media queries for all screen sizes
    ├── js/
    │   └── main.js              — Navigation, smooth scroll, API integration
    ├── images/                  — Optimized WebP images
    ├── server/
    │   ├── server.js            — Express server and API endpoints
    │   ├── database.js          — SQLite database connection and schema
    │   ├── seed.js              — Database seeding script
    │   ├── revline.db           — SQLite database file
    │   └── package.json         — Node.js dependencies
    └── README.md

## Tech Stack

Frontend:

- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS Variables, Media Queries)
- Vanilla JavaScript (Fetch API)

Backend:

- Node.js
- Express.js
- SQLite (better-sqlite3)
- CORS

## Key Features

- Semantic HTML5 structure
- Fully responsive layout (mobile, tablet, desktop)
- One-page navigation with smooth scrolling
- Hamburger menu for mobile devices
- Cars loaded dynamically from REST API
- Contact form connected to backend
- WCAG AA accessibility compliance
- Optimized WebP images with lazy loading
- Lighthouse score 90+ in all categories

## How to Run

### 1. Start the backend server

    cd server
    npm install
    node seed.js
    node server.js

Server will start at: http://localhost:3000
API available at: http://localhost:3000/api/cars

### 2. Open the frontend

Open index.html in your browser using Live Server (VS Code extension)
or any static file server.

Make sure the backend server is running before opening the frontend.

## API Endpoints

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| GET    | /api/cars          | Get all cars                |
| GET    | /api/cars/featured | Get featured cars only      |
| GET    | /api/cars/:id      | Get single car by ID        |
| POST   | /api/messages      | Submit contact form message |
| GET    | /api/messages      | Get all messages            |

## Figma Design

[https://www.figma.com/design/B82sTbzJQBGuTeU1vYxEKG/PWI_Project?node-id=0-1&t=ore7wCP270ywvQ3C-1](#)

## Author

## Roman Bukhta — [github.com/G1olog1c](#)

## PL — Opis projektu

Revline to responsywna strona internetowa dla miłośników motoryzacji,
zbudowana z backendem Node.js i bazą danych SQLite.
Projekt prezentuje kultowe samochody i treści związane z kulturą car enthusiasts.

## Struktura projektu

    revline/
    ├── index.html               — Główny plik HTML
    ├── css/
    │   ├── style.css            — Główne style i zmienne CSS
    │   └── responsive.css       — Media queries
    ├── js/
    │   └── main.js              — Nawigacja, smooth scroll, integracja z API
    ├── images/                  — Zoptymalizowane obrazy WebP
    ├── server/
    │   ├── server.js            — Serwer Express i endpointy API
    │   ├── database.js          — Połączenie z bazą danych SQLite
    │   ├── seed.js              — Skrypt inicjalizujący bazę danych
    │   ├── revline.db           — Plik bazy danych SQLite
    │   └── package.json         — Zależności Node.js
    └── README.md

## Technologie

Frontend:

- HTML5 (semantyczne znaczniki)
- CSS3 (Flexbox, Grid, CSS Variables, Media Queries)
- Vanilla JavaScript (Fetch API)

Backend:

- Node.js
- Express.js
- SQLite (better-sqlite3)
- CORS

## Jak uruchomić

### 1. Uruchom serwer backend

    cd server
    npm install
    node seed.js
    node server.js

Serwer będzie dostępny pod adresem: http://localhost:3000
API dostępne pod adresem: http://localhost:3000/api/cars

### 2. Otwórz frontend

Otwórz plik index.html w przeglądarce przy użyciu Live Server (rozszerzenie VS Code)
lub dowolnego serwera plików statycznych.

Upewnij się, że serwer backend jest uruchomiony przed otwarciem frontendu.

## Endpointy API

| Metoda | Endpoint           | Opis                                       |
| ------ | ------------------ | ------------------------------------------ |
| GET    | /api/cars          | Pobierz wszystkie samochody                |
| GET    | /api/cars/featured | Pobierz tylko wyróżnione samochody         |
| GET    | /api/cars/:id      | Pobierz jeden samochód po ID               |
| POST   | /api/messages      | Wyślij wiadomość z formularza kontaktowego |
| GET    | /api/messages      | Pobierz wszystkie wiadomości               |

## Figma

[https://www.figma.com/design/B82sTbzJQBGuTeU1vYxEKG/PWI_Project?node-id=0-1&t=ore7wCP270ywvQ3C-1](#)

## Autor

Roman Bukhta — [github.com/G1olog1c](#)
