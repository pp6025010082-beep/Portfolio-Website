# My Professional Portfolio Website

A full-stack personal portfolio built with React, Express, and MongoDB — built for the Web Development Final Assessment.

## 1. Project Overview

This is a full-stack web application, not just a static site. The React front end fetches project data from a RESTful Express API backed by MongoDB, and the contact form submits directly to that API. A protected admin dashboard lets the site owner add, edit, and delete portfolio projects without touching the database directly.

## 2. Main Features

- Single-page portfolio with Home/Hero, About, Skills, Projects, Education & Experience, and Contact sections
- Project data loaded from MongoDB via a REST API, with a details modal per project
- Contact form with client-side and server-side validation, submitted to the backend and stored in MongoDB
- Protected admin dashboard (`/admin`) for full CRUD management of projects (password + JWT session)
- Responsive layout (desktop, tablet, mobile) with no horizontal scrolling or broken navigation
- Subtle, consistent animations: scroll-triggered fade-ins, hover elevation on cards, smooth transitions on buttons/forms, smooth in-page scrolling
- Accessible markup: semantic HTML, labelled form fields, visible focus states, skip-to-content link, keyboard-operable nav and modal

## 3. Technologies Used

**Front end:** React 18, React Router, Vite, CSS Modules, Source Sans Pro (Google Fonts)
**Back end:** Node.js, Express, Mongoose, JSON Web Tokens
**Database:** MongoDB
**Tooling:** Git/GitHub, npm, dotenv

## 4. Application Architecture

```
portfolio-project/
├── client/                  React front end (Vite)
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/      Reusable UI components (Button, Navbar, ProjectCard, ...)
│       │   └── sections/    Page sections composed on the Home page
│       ├── context/         AdminAuthContext (admin session state)
│       ├── data/            Editable placeholder content (name, bio, skills, education)
│       ├── hooks/           useScrollReveal (scroll fade-in animation)
│       ├── pages/           Home, AdminDashboard, AdminLogin, NotFound
│       ├── services/        API client (fetch wrapper, projects/messages/auth services)
│       └── styles/          Design tokens (variables.css) and global styles
│
├── server/                  Express back end
│   ├── config/               MongoDB connection
│   ├── controllers/          Route handler logic
│   ├── middleware/           Auth guard, 404 handler, centralized error handler
│   ├── models/                Project and Message Mongoose schemas
│   ├── routes/                /api/projects, /api/messages, /api/auth
│   ├── scripts/seed.js        Seeds sample project data
│   ├── app.js / server.js
│
├── README.md
└── .gitignore
```

The React app calls the Express API over HTTP (JSON). Express validates input with Mongoose schema validation, talks to MongoDB via Mongoose, and returns JSON with appropriate HTTP status codes. Project create/update/delete and message retrieval require a short-lived admin JWT obtained by logging in with a password stored in an environment variable — nothing is hardcoded in source.

## 5. Database Design

**projects** collection

| Field | Type | Notes |
|---|---|---|
| title | String | required, 3–120 chars |
| description | String | required, 10–500 chars |
| problem | String | optional |
| mainFeatures | [String] | optional |
| technologies | [String] | optional |
| imageUrl, githubUrl, liveUrl | String | optional |
| contribution, challenges, lessonsLearned | String | optional |
| featured | Boolean | default false |
| createdAt / updatedAt | Date | auto-generated |

**messages** collection

| Field | Type | Notes |
|---|---|---|
| name | String | required, 2–100 chars |
| email | String | required, valid email format |
| subject | String | required, 3–150 chars |
| message | String | required, 10–2000 chars |
| createdAt | Date | auto-generated |

Messages are never exposed on a public endpoint — `GET /api/messages` requires an admin session.

## 6. RESTful API Design

Base URL: `/api`

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | /projects | Public | Retrieve all projects |
| GET | /projects/:id | Public | Retrieve one project |
| POST | /projects | Admin | Add a new project |
| PUT | /projects/:id | Admin | Update a project |
| DELETE | /projects/:id | Admin | Delete a project |
| POST | /messages | Public | Submit a contact message |
| GET | /messages | Admin | Retrieve submitted messages |
| POST | /auth/login | Public | Exchange admin password for a session token |
| GET | /health | Public | Health check |

Responses use JSON with appropriate status codes (200, 201, 400, 401, 404, 500). Admin-only routes require `Authorization: Bearer <token>`, obtained from `/api/auth/login`.

## 7. Installation

### Prerequisites
- Node.js 18+
- A MongoDB connection string (local MongoDB or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)

### Clone and install

```bash
git clone <your-repo-url>
cd portfolio-project
cd client && npm install
cd ../server && npm install
```

## 8. Environment Variables

Copy the example files and fill in your own values — never commit the real `.env` files.

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

**server/.env**

| Variable | Description |
|---|---|
| PORT | Port the API listens on (default 5050) |
| MONGODB_URI | MongoDB connection string |
| CLIENT_ORIGIN | Allowed front-end origin(s) for CORS |
| ADMIN_PASSWORD | Password required to access `/admin` |
| ADMIN_JWT_SECRET | Secret used to sign admin session tokens |

**client/.env**

| Variable | Description |
|---|---|
| VITE_API_URL | Base URL of the backend API (`/api` locally via the Vite proxy) |

## 9. Running the Backend

```bash
cd server
npm install
npm run dev        # starts the API with auto-restart on http://localhost:5050
npm run seed        # optional: inserts sample projects into MongoDB
```

## 10. Running the Frontend

```bash
cd client
npm install
npm run dev         # starts Vite dev server on http://localhost:5173
```

The dev server proxies `/api` requests to `http://localhost:5050` (see `client/vite.config.js`), so both servers should be running locally at the same time.

## 11. Admin Dashboard

Visit `/admin`, log in with the password set in `server/.env` (`ADMIN_PASSWORD`), and manage projects (add/edit/delete) through the dashboard UI. Sessions are short-lived JWTs stored in `localStorage`.

## 12. Editing Your Content

Personal details (name, bio, skills, education/experience, links) are placeholders meant to be edited in one place: `client/src/data/content.js`. Replace the sample project entries either by editing `server/scripts/seed.js` and re-seeding, or by using the admin dashboard directly.

## 13. Live Website URL

https://main.d3kh13lu42hjde.amplifyapp.com

## 14. GitHub Repository URL

https://github.com/pp6025010082-beep/Portfolio-Website

## 15. Known Limitations

- Admin authentication uses a single shared password rather than per-user accounts.
- No image upload; project images are linked by URL.
- No automated test suite included.

## 16. Future Improvements

- Add per-user admin accounts with hashed credentials.
- Add image upload support (e.g. via S3).
- Add email notifications when a contact message is submitted.
- Add automated tests (unit + integration) and CI.

## 17. Author

Built by Phok Phallaoudom 

