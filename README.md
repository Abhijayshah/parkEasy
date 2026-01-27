
# ParkEasy - Parking Reservation System

ParkEasy is a full-stack web application (MERN Stack) designed to simplify parking reservations. Users can browse available parking spots, view details, book tickets, and manage their reservations seamlessly.

## 🚀 Features

-   **User Authentication:** Secure Signup and Login using JWT (JSON Web Tokens).
-   **Browse Parking Spots:** View available parking locations with images and details.
-   **Booking System:** Reserve parking spots with entry and exit times.
-   **My Bookings:** View active and past bookings with generated Ticket IDs.
-   **Responsive Design:** Works smoothly on desktop and mobile devices.

## 🛠 Tech Stack

This project uses the **MERN** stack:

-   **MongoDB:** NoSQL database for storing users, places, and bookings.
-   **Express.js:** Backend framework for building RESTful APIs.
-   **React.js:** Frontend library for building the user interface.
-   **Node.js:** Runtime environment for the server.

> **Note on File Extensions:**
> This project uses standard **React** practices. Although file extensions are `.js`, they contain **JSX** code (JavaScript XML). React and modern build tools (like Create React App used here) fully support JSX syntax inside `.js` files.

## 📂 Project Structure

```
ParkEasy/
├── client/                 # Frontend (React)
│   ├── public/             # Static assets (index.html, images)
│   ├── src/                # Source code
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page views (Home, Auth, Profile, Bookings)
│   │   ├── images/         # Project images
│   │   ├── App.js          # Main App component
│   │   └── AppContext.js   # Global State Management (Context API)
│   └── package.json        # Frontend dependencies
├── server/                 # Backend (Node.js/Express)
│   ├── models/             # Mongoose schemas (User, Place, Booking)
│   ├── routes/             # API routes (Auth, Places, Bookings)
│   ├── server.js           # Entry point for the backend server
│   └── package.json        # Backend dependencies
├── vercel.json             # Deployment configuration for Vercel
└── README.md               # Project documentation
```

## ⚙️ Setup & Installation

### Prerequisites

-   Node.js installed (v14 or higher)
-   MongoDB installed and running locally

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ParkEasy
```

### 2. Install Dependencies

**Server:**

```bash
cd server
npm install
```

**Client:**

```bash
cd ../client
npm install
```

### 3. Environment Configuration

The project comes with default configurations for localhost.
-   **Server:** Runs on port `5001`
-   **Client:** Proxies API requests to `http://localhost:5001`

### 4. Run the Application

**Start Backend:**

```bash
cd server
node server.js
```
*(You should see "Connected to MongoDB" and "Server running on http://localhost:5001")*

**Start Frontend:**

Open a new terminal:
```bash
cd client
npm start
```
*(The app will open at http://localhost:3000)*

## 🌍 Deployment

For a detailed step-by-step guide on deploying to **Vercel (Frontend)**, **Render (Backend)**, and **MongoDB Atlas (Database)**, please refer to:

👉 **[DEPLOYMENT.md](./DEPLOYMENT.md)**

This project is configured for easy deployment:
-   **Frontend:** React App (Vercel)
-   **Backend:** Node.js/Express (Render)
-   **Database:** MongoDB Atlas

## 🛡 API Endpoints

-   `POST /api/auth/signup` - Register a new user
-   `POST /api/auth/login` - User login
-   `GET /api/places` - Get all parking places
-   `GET /api/bookings/:emailId` - Get bookings for a user
-   `POST /api/bookings/:emailId` - Create a new booking
