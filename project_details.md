# 🅿️ ParkEasy - Project Analysis & Details

## 📖 Overview
**ParkEasy** is a web-based parking reservation system built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). It allows users to browse available parking spots, view details, and book reservations. The application features user authentication, a responsive user interface, and a RESTful API backend.

## 📂 Project Structure

```text
ParkEasy-master/
├── client/                     # Frontend (React Application)
│   ├── public/                 # Static assets (images, index.html)
│   ├── src/                    # Source code
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Auth/           # Authentication forms
│   │   │   ├── Layout/         # Layout components (Navbar, Footer, Modal)
│   │   │   ├── Profile/        # User profile & booking components
│   │   │   └── StartingPage/   # Landing page components
│   │   ├── images/             # Project images & logos
│   │   ├── pages/              # Route pages (Home, Auth, Bookings)
│   │   ├── App.js              # Main application component & routing
│   │   ├── AppContext.js       # Global state management (Context API)
│   │   └── index.js            # Entry point
│   ├── .env                    # Client-side environment variables
│   └── package.json            # Client dependencies & scripts
│
├── server/                     # Backend (Node.js/Express API)
│   ├── models/                 # Mongoose schemas (DB models)
│   │   ├── Booking.js
│   │   ├── Place.js
│   │   └── User.js
│   ├── routes/                 # API route definitions
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── placeRoutes.js
│   ├── .env                    # Server-side environment variables
│   ├── seed.js                 # Database seeding script
│   ├── server.js               # Main server entry point
│   └── package.json            # Server dependencies & scripts
│
├── DEPLOYMENT.md               # Deployment guide
└── README.md                   # General project documentation
```

## 🏗 Architecture

The project follows a **Client-Server Architecture**:

### 1. Client (Frontend)
*   **Location:** `client/` folder.
*   **Tech Stack:** React, React Router DOM, CSS Modules.
*   **Role:** Handles the user interface, client-side routing, and state management. It communicates with the backend via HTTP requests (Fetch API).
*   **Key Logic:**
    *   **State Management:** `AppContext.js` manages global state like user authentication status (token, email) and search terms.
    *   **Routing:** `App.js` defines the routes (`/`, `/auth`, `/bookings`, etc.).
    *   **Components:** Modular components in `src/components/` handle specific UI parts.

### 2. Server (Backend)
*   **Location:** `server/` folder.
*   **Tech Stack:** Node.js, Express.js, MongoDB (Mongoose), JWT (JSON Web Tokens).
*   **Role:** Serves as the REST API, handles business logic, interacts with the database, and manages authentication.
*   **Key Logic:**
    *   **Entry Point:** `server.js` sets up the Express app, middleware (CORS, JSON parsing), and connects to MongoDB.
    *   **API Endpoints:** Defined in `routes/` and mapped in `server.js` (e.g., `/api/auth`, `/api/places`).
    *   **Data Models:** Mongoose schemas in `models/` define the structure of Users, Places, and Bookings.

---

## 🔍 Detailed File Analysis

### Client Side (`client/src/`)
*   **`AppContext.js`**: The heart of the frontend state. It provides `isLoggedIn`, `token`, `places` list, and authentication handlers (`loginHandler`, `logoutHandler`) to the entire app using React Context.
*   **`App.js`**: Sets up the React Router. It protects routes (e.g., redirecting unauthenticated users from `/profile`).
*   **`components/Auth/AuthForm.js`**: Handles Login and Signup logic. It sends POST requests to `/api/auth/login` or `/api/auth/signup` and updates the AppContext upon success.
*   **`components/Profile/Bookings.js`**: Fetches and displays a user's booking history. It filters bookings into "Active" and "Expired" based on the current date.
*   **`components/Profile/ParkHere.js` & `PlaceForm2.js`**: Handles the booking process for a specific parking spot. It calculates the price based on duration and sends booking data to the backend.

### Server Side (`server/`)
*   **`server.js`**: Initializes the application. It connects to MongoDB using `MONGO_URI` from `.env` and starts the server on the specified `PORT`.
*   **`models/User.js`**: Defines the User schema (email, password).
*   **`models/Place.js`**: Defines the Parking Spot schema (name, city, price, image).
*   **`models/Booking.js`**: Defines the Booking schema (user info, time slot, license plate, ticket ID).
*   **`routes/authRoutes.js`**: Handles user registration and login. Uses `bcryptjs` for password hashing and `jsonwebtoken` for generating auth tokens.
*   **`routes/placeRoutes.js`**: Provides endpoints to fetch available parking places.
*   **`routes/bookingRoutes.js`**: Handles creating and fetching bookings.

---

## 🔄 Internal Workflow & Data Flow

### 1. Authentication Flow
1.  **User Action:** User enters email/password in `AuthForm.js`.
2.  **Request:** Client sends `POST /api/auth/login` (or signup) to the server.
3.  **Server Logic:**
    *   `authRoutes.js` validates credentials.
    *   If valid, it generates a **JWT (JSON Web Token)**.
4.  **Response:** Server returns the token and user email.
5.  **Client Logic:** `AuthForm` receives the token, calls `loginHandler` in `AppContext`, and stores the token in `localStorage` for persistence.

### 2. Booking Flow
1.  **User Action:** User selects a place and fills in the booking form (`PlaceForm2.js`).
2.  **Request:** Client sends `POST /api/bookings/:email` with the booking details and the **Auth Token** in the URL or headers.
3.  **Server Logic:**
    *   `bookingRoutes.js` verifies the user (optional middleware step) and saves the booking to MongoDB.
    *   It links the booking to the specific user's email.
4.  **Response:** Server confirms the booking creation.
5.  **Client Logic:** UI updates to show a success modal with the generated **Ticket ID**.

### 3. Data Fetching
*   **Places:** On load, `AppContext` fetches the list of places from `/api/places`.
*   **Bookings:** When visiting the "Bookings" page, the client fetches `/api/bookings/:email` to retrieve the user's history.

---

## 🚀 How to Start the Application

### Prerequisites
*   Node.js installed.
*   MongoDB installed locally or a MongoDB Atlas account.

### Step 1: Start the Backend
1.  Navigate to the server folder: `cd server`
2.  Install dependencies: `npm install`
3.  Set up `.env`: Ensure `MONGO_URI` and `PORT` are set.
4.  Run the server: `node server.js`
    *   *Server runs on port 5001 by default.*

### Step 2: Start the Frontend
1.  Open a new terminal.
2.  Navigate to the client folder: `cd client`
3.  Install dependencies: `npm install`
4.  Start the React app: `npm start`
    *   *Client runs on port 3000 by default.*

### Step 3: Usage
*   Open `http://localhost:3000` in your browser.
*   The frontend (port 3000) will proxy API requests to the backend (port 5001) as configured in `client/package.json` (`"proxy": "http://localhost:5001"`).
