# Revline — Car Enthusiast Magazine

A responsive full-stack website for automotive enthusiasts with a Node.js backend
and SQLite database. Revline is an online magazine dedicated to iconic car builds,
raw stories, and authentic car culture.

---

## Features

- Semantic HTML5 structure with WCAG AA accessibility
- Fully responsive layout (mobile, tablet, desktop)
- One-page navigation with smooth scrolling
- Hamburger menu for mobile devices
- Infinite carousel showcasing 10 iconic cars (loaded from API)
- Modal window with detailed car specs (year, engine, power, origin)
- Contact form with frontend and backend email validation
- Admin panel for viewing submitted messages
- REST API with 5 endpoints
- Lighthouse score 90+ in all categories

## Tech Stack

**Frontend**

- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS Variables, Media Queries)
- Vanilla JavaScript (Fetch API)

**Backend**

- Node.js
- Express.js
- SQLite (better-sqlite3)
- CORS

## Folder Structure

    revline/
    ├── index.html               — Main page
    ├── admin.html               — Admin panel
    ├── css/
    │   ├── style.css            — Main styles and CSS variables
    │   ├── responsive.css       — Media queries
    │   └── admin.css            — Admin panel styles
    ├── js/
    │   └── main.js              — Navigation, carousel, modal, API integration
    ├── images/                  — Optimized WebP images
    ├── server/
    |   ├── node_modules/        – modules
    │   ├── server.js            — Express server and API endpoints
    │   ├── database.js          — SQLite connection and schema
    │   ├── seed.js              — Database seeding script
    │   ├── revline.db           — SQLite database file
    │   └── package.json         — Node.js dependencies
    ├── UX_analysis.md           — UX analysis document
    └── README.md

## How to Run

### 1. Install backend dependencies

    cd server
    npm install

### 2. Seed the database with 10 cars

    node seed.js

You should see: `Database seeded with 10 cars successfully!`

### 3. Start the backend server

    node server.js

Server runs at: `http://localhost:3000`
API available at: `http://localhost:3000/api/cars`

### 4. Open the frontend

Open `index.html` in your browser using Live Server (VS Code extension)
or any static file server.

The backend server must be running before opening the frontend.

### 5. Admin panel

Open `admin.html` to view contact form submissions.

## API Endpoints

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| GET    | /api/cars          | Get all cars                |
| GET    | /api/cars/featured | Get featured cars only      |
| GET    | /api/cars/:id      | Get single car by ID        |
| POST   | /api/messages      | Submit contact form message |
| GET    | /api/messages      | Get all messages (admin)    |

## Figma Design

[https://www.figma.com/design/B82sTbzJQBGuTeU1vYxEKG/PWI_Project?node-id=0-1&t=ore7wCP270ywvQ3C-1](#)

## Author

Roman Bukhta — [github.com/G1olog1c](#)

---

## PL — Opis projektu

Revline to responsywna pełnostackowa strona internetowa dla miłośników motoryzacji,
zbudowana z backendem Node.js i bazą danych SQLite. Projekt prezentuje kultowe
samochody i treści związane z kulturą car enthusiasts.

## Funkcjonalności

- Semantyczna struktura HTML5 z zachowaniem dostępności WCAG AA
- W pełni responsywny layout (mobile, tablet, desktop)
- Nawigacja one-page z płynnym przewijaniem
- Menu hamburger dla urządzeń mobilnych
- Nieskończona karuzela prezentująca 10 kultowych samochodów (pobierane z API)
- Modal z szczegółowymi specyfikacjami samochodu (rok, silnik, moc, kraj)
- Formularz kontaktowy z walidacją frontend i backend
- Panel administratora do przeglądania wiadomości
- REST API z 5 endpointami
- Wynik Lighthouse 90+ we wszystkich kategoriach

## Technologie

**Frontend**

- HTML5 (semantyczne znaczniki)
- CSS3 (Flexbox, Grid, CSS Variables, Media Queries)
- Vanilla JavaScript (Fetch API)

**Backend**

- Node.js
- Express.js
- SQLite (better-sqlite3)
- CORS

## Struktura projektu

    revline/
    ├── index.html               — Strona główna
    ├── admin.html               — Panel administratora
    ├── css/
    │   ├── style.css            — Główne style i zmienne CSS
    │   ├── responsive.css       — Media queries
    │   └── admin.css            — Style panelu administratora
    ├── js/
    │   └── main.js              — Nawigacja, karuzela, modal, integracja z API
    ├── images/                  — Zoptymalizowane obrazy WebP
    ├── server/
    |   ├── node_modules/        – Moduły
    │   ├── server.js            — Serwer Express i endpointy API
    │   ├── database.js          — Połączenie z SQLite i schema
    │   ├── seed.js              — Skrypt inicjalizujący bazę
    │   ├── revline.db           — Plik bazy danych SQLite
    │   └── package.json         — Zależności Node.js
    ├── UX_analysis.md           — Dokument analizy UX
    └── README.md

## Jak uruchomić

### 1. Zainstaluj zależności backendu

    cd server
    npm install

### 2. Wypełnij bazę danych 10 samochodami

    node seed.js

Powinno pojawić się: `Database seeded with 10 cars successfully!`

### 3. Uruchom serwer backend

    node server.js

Serwer działa pod adresem: `http://localhost:3000`
API dostępne pod: `http://localhost:3000/api/cars`

### 4. Otwórz frontend

Otwórz plik `index.html` w przeglądarce przy użyciu Live Server
(rozszerzenie VS Code) lub dowolnego serwera plików statycznych.

Serwer backend musi być uruchomiony przed otwarciem frontendu.

### 5. Panel administratora

Otwórz plik `admin.html`, aby zobaczyć wiadomości z formularza kontaktowego.

## Endpointy API

| Metoda | Endpoint           | Opis                                 |
| ------ | ------------------ | ------------------------------------ |
| GET    | /api/cars          | Pobierz wszystkie samochody          |
| GET    | /api/cars/featured | Pobierz tylko wyróżnione samochody   |
| GET    | /api/cars/:id      | Pobierz jeden samochód po ID         |
| POST   | /api/messages      | Wyślij wiadomość z formularza        |
| GET    | /api/messages      | Pobierz wszystkie wiadomości (admin) |

## Figma

[https://www.figma.com/design/B82sTbzJQBGuTeU1vYxEKG/PWI_Project?node-id=0-1&t=ore7wCP270ywvQ3C-1](#)

## Autor

Roman Bukhta — [github.com/G1olog1c](#)
