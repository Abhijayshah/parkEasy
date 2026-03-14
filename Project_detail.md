# 🅿️ ParkEasy - Project Documentation

## 🚀 Project Overview
**ParkEasy** is a full-stack web application designed to simplify the process of finding and booking parking spaces. Built on the **MERN Stack**, it features a responsive frontend for users to browse locations and manage bookings, and a robust backend for handling data persistence and authentication.

## 🛠 Tech Stack
*   **Frontend:** React.js, React Router DOM, Context API, CSS Modules
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB, Mongoose
*   **Authentication:** JSON Web Tokens (JWT), BCrypt.js
*   **Deployment:** Vercel (Frontend), Render (Backend)

## 📂 Project Structure & File Guide

### Root Directory
*   `DEPLOYMENT.md` - Step-by-step guide for deploying the app to Vercel and Render.
*   `README.md` - General introduction and startup instructions.
*   `vercel.json` - Configuration for Vercel deployment (if present).

### 🖥️ Client (Frontend) - `client/`
The React application handling the user interface.

*   **`src/`**
    *   **`App.js`** - Main component; handles client-side routing (Home, Auth, Profile).
    *   **`AppContext.js`** - **Critical**: Manages global state (User login status, Token, Place data).
    *   **`index.js`** - Entry point; renders the App component into the DOM.
    *   **`index.css`** - Global styles.
    *   **`components/`**
        *   **`Auth/`**
            *   `AuthForm.js` - Form for User Login and Signup; handles API calls to backend.
        *   **`Layout/`**
            *   `Navbar1.js` / `Navbar2.js` - Navigation bars (responsive).
            *   `Footer.js` - Page footer.
            *   `Modal.js` - Reusable modal popup (used for booking confirmation).
            *   `Alert.js` - Displays error or success messages.
            *   `Loader.js` / `LoadingSpinner.js` - UI feedback during data fetching.
            *   `Places/`
                *   `PlacesList.js` - Renders the grid of available parking spots.
                *   `PlaceItem.js` - Individual card component for a parking spot.
        *   **`Profile/`**
            *   `Bookings.js` - Displays user's booking history; separates active/expired tickets.
            *   `ParkHere.js` - Detailed view of a specific parking spot.
            *   `PlaceForm2.js` - Form to select time/duration and create a booking.
        *   **`StartingPage/`**
            *   `Welcome.js` - Hero section of the landing page.
            *   `Presence.js` - Informational section about parking availability.
    *   **`pages/`**
        *   `HomePage.js` - Landing page; combines Welcome, Presence, and PlacesList.
        *   `AuthPage.js` - Wrapper for the Authentication form.
        *   `ProfilePage.js` - User dashboard showing profile and bookings.
        *   `BookingsPage.js` - Dedicated page for viewing tickets.
    *   **`public/`**
        *   `tiles/` - Folder containing images for different parking locations.

### ⚙️ Server (Backend) - `server/`
The Node.js/Express API handling logic and database interactions.

*   **`server.js`** - **Entry Point**: Connects to MongoDB, configures CORS, and registers routes.
*   **`seed.js`** - Script to populate the database with initial dummy data (Parking Places).
*   **`models/`** (Mongoose Schemas)
    *   `User.js` - Schema for User data (email, password hash).
    *   `Place.js` - Schema for Parking Spot data (title, description, address, price).
    *   `Booking.js` - Schema for Reservations (user ID, place ID, dates, ticket ID).
*   **`routes/`** (API Endpoints)
    *   `authRoutes.js` - `/api/auth` - Handles Login and Signup.
    *   `placeRoutes.js` - `/api/places` - CRUD operations for parking spots.
    *   `bookingRoutes.js` - `/api/bookings` - Handles creating and fetching bookings.

## 📄 Resume Points (ATS-Friendly)
*Add these bullet points to your resume under "Projects" or "Experience":*

*   **Full-Stack Web Development:** Engineered a comprehensive parking reservation system using the **MERN stack (MongoDB, Express, React, Node.js)**, enabling real-time booking management and data persistence.
*   **Secure Authentication & State Management:** Implemented secure user authentication using **JWT (JSON Web Tokens)** and managed complex application state (user sessions, booking data) utilizing **React Context API**.
*   **RESTful API Design:** Designed and developed scalable **RESTful APIs** with Node.js and Express to handle seamless data communication between the client and database, optimizing frontend load times.
*   **Responsive UI/UX:** Built a fully **responsive user interface** with React.js and CSS Modules, ensuring cross-device compatibility and a high-quality user experience.
*   **Database Modeling:** Utilized **Mongoose** for structured data modeling, implementing strict schema validation for Users, Places, and Bookings to ensure data integrity.
