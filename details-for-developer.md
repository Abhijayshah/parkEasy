# 🅿️ ParkEasy - Developer Documentation

> **Last Updated:** 2026-03-15  
> **Version:** 1.0.0

This document provides a comprehensive technical overview of the ParkEasy codebase for developers. ParkEasy is a full-stack parking reservation system built using the MERN stack.

---

## 1. PROJECT OVERVIEW
- **Project Name**: ParkEasy
- **Description**: A full-stack web application designed to simplify finding and booking parking spaces across various locations (airports, hotels, etc.).
- **Main Purpose**: To provide users with a seamless interface to browse available parking spots, view pricing, and manage reservations with generated ticket IDs.
- **Target Audience**: Travelers and commuters looking for pre-booked, secure parking options.

---

## 2. TECH STACK
- **Frontend**: React.js (v17.0.1)
  - **State Management**: React Context API ([AppContext.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/AppContext.js))
  - **Routing**: React Router DOM (v5.2.0)
- **Styling**: CSS Modules (scoped styles per component)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT) & BCrypt.js for password hashing
- **Build Tools**: Create React App (react-scripts v5.0.1)
- **Package Manager**: npm
- **Deployment**: 
  - **Frontend**: Vercel (configured via `vercel.json`)
  - **Backend**: Render

---

## 3. FILE STRUCTURE

```text
ParkEasy-master/
├── client/                     # React Frontend
│   ├── public/                 # Static assets
│   │   └── tiles/              # Parking location images
│   ├── src/
│   │   ├── components/         # UI Components
│   │   │   ├── Auth/           # Login/Signup forms
│   │   │   ├── Layout/         # Shared UI (Navbar, Footer, Modal, Alert)
│   │   │   │   └── Places/     # Parking list and item components
│   │   │   ├── Profile/        # User-specific components (Bookings, ParkHere)
│   │   │   └── StartingPage/   # Landing page specific sections
│   │   ├── pages/              # Top-level route components
│   │   ├── App.js              # Root component & Routing configuration
│   │   ├── AppContext.js       # Global state (Auth, Places, Bookings)
│   │   └── index.js            # Frontend entry point
│   └── package.json            # Frontend dependencies
├── server/                     # Express Backend
│   ├── models/                 # Mongoose Schemas (User, Place, Booking)
│   ├── routes/                 # API Route handlers
│   ├── server.js               # Backend entry point & Middleware config
│   ├── seed.js                 # Database seeding script
│   └── package.json            # Backend dependencies
├── DEPLOYMENT.md               # Deployment instructions
└── README.md                   # General project intro
```

---

## 4. KEY COMPONENTS

### **AuthForm**
- **File Path**: [AuthForm.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/components/Auth/AuthForm.js)
- **Purpose**: Handles both User Login and Signup modes.
- **Props**: None (uses Context).
- **Dependencies**: `useAppContext`, `react-router-dom`.

### **PlacesList**
- **File Path**: [PlacesList.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/components/Layout/Places/PlacesList.js)
- **Purpose**: Renders the grid of available parking spots and handles filtering via a search bar.
- **Dependencies**: `PlaceItem`, `SearchForm`, `useAppContext`.

### **ParkHere**
- **File Path**: [ParkHere.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/components/Profile/ParkHere.js)
- **Purpose**: Detailed view of a single parking spot; entry point for creating a booking.
- **Props**: Uses `placeId` from URL params.

### **Bookings**
- **File Path**: [Bookings.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/components/Profile/Bookings.js)
- **Purpose**: Fetches and displays the authenticated user's booking history.

---

## 5. ROUTING STRUCTURE
ParkEasy uses `react-router-dom` v5 for client-side routing in [App.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/App.js).

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | `HomePage` | Public | Landing page with Hero and Places list |
| `/auth` | `AuthPage` | Public* | Login/Signup (Redirects to `/` if logged in) |
| `/profile` | `Presence` | Protected | User dashboard overview |
| `/bookings` | `BookingsPage` | Protected | User's reservation history |
| `/profile/:placeId` | `ProfilePage` | Protected | Booking form for a specific spot |
| `*` | `Redirect` | Public | Catch-all redirects to `/` |

---

## 6. API ENDPOINTS

### **Authentication** ([authRoutes.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/server/routes/authRoutes.js))
- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Authenticate user and return JWT.

### **Parking Places** ([placeRoutes.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/server/routes/placeRoutes.js))
- `GET /api/places`: Retrieve all parking locations (Returned as an object keyed by ID).

### **Bookings** ([bookingRoutes.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/server/routes/bookingRoutes.js))
- `POST /api/bookings/:emailId`: Create a new booking. Requires JWT in `?auth=` or `Authorization` header.
- `GET /api/bookings/:emailId`: Fetch bookings for the authenticated user.

---

## 7. STYLING SYSTEM
- **Methodology**: **CSS Modules** are used for component-level styling to avoid global namespace collisions.
- **Global Styles**: Located in [index.css](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/ParkEasy-master/client/src/index.css).
- **Naming Convention**: `[ComponentName].module.css`.
- **Responsive Design**: Implemented using standard CSS media queries within module files.

---

## 8. ENVIRONMENT VARIABLES

### **Client-side (`client/.env`)**
- `REACT_APP_BACKEND_URL`: The base URL for the backend API (e.g., `http://localhost:5001` or production URL).

### **Server-side (`server/.env`)**
- `PORT`: The port on which the server runs (default: `5001`).
- `MONGO_URI`: Connection string for MongoDB.
- `JWT_SECRET`: Secret key used for signing JSON Web Tokens.

---

## 9. SCRIPTS & COMMANDS

### **Frontend (`client/`)**
```bash
npm start    # Runs the app in development mode
npm run build # Builds the app for production
npm test     # Launches the test runner
```

### **Backend (`server/`)**
```bash
node server.js  # Starts the production server
node seed.js    # Populates the database with initial parking data
```

---

## 10. DEPENDENCIES

### **Core Dependencies**
- `react`, `react-dom`: Frontend UI library.
- `express`: Backend web framework.
- `mongoose`: MongoDB object modeling.
- `jsonwebtoken`: Secure transmission of information between parties.
- `bcryptjs`: Password hashing for security.

### **Dev Dependencies**
- `react-scripts`: Build tools for React.
- `dotenv`: Loads environment variables from `.env` files.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.

---

## 11. DEPLOYMENT NOTES
- **Build Process**: The frontend must be built using `npm run build` before deployment.
- **Proxy**: The `package.json` in `client/` contains a `"proxy": "http://localhost:5001"` setting for local development.
- **Database**: Ensure MongoDB is accessible from the production server and the `MONGO_URI` is correctly set.

---

## 12. FUTURE SECTIONS (Placeholder)
- [TODO: Document Payment Integration flow]
- [TODO: Add instructions for running E2E tests]
- [TODO: Detail the image upload process for new parking spots]
