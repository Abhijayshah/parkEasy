# 🚀 Deployment Guide

This guide details how to deploy the **ParkEasy** application with the following architecture:
- **Database:** MongoDB Atlas (Cloud Database)
- **Backend:** Render (Node.js API)
- **Frontend:** Vercel (React App)

---

## 📦 Phase 1: Database (MongoDB Atlas)

1.  **Create an Account:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up.
2.  **Create a Cluster:**
    -   Click **+ Create**.
    -   Select **M0 Sandbox** (Free Tier).
    -   Choose a region (e.g., AWS / N. Virginia).
    -   Click **Create Deployment**.
3.  **Create a User:**
    -   Go to **Database Access** (sidebar).
    -   Click **+ Add New Database User**.
    -   Enter a **Username** and **Password** (Remember these!).
    -   Role: "Read and write to any database".
    -   Click **Add User**.
4.  **Network Access (Allow Connections):**
    -   Go to **Network Access** (sidebar).
    -   Click **+ Add IP Address**.
    -   Click **Allow Access from Anywhere** (`0.0.0.0/0`). (Required for Render to connect).
    -   Click **Confirm**.
5.  **Get Connection String:**
    -   Go to **Database** (sidebar).
    -   Click **Connect** on your cluster.
    -   Select **Drivers** (Node.js).
    -   Copy the connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`).
    -   *Replace `<password>` with your actual password.*

---

## 🛠 Phase 2: Backend Deployment (Render)

1.  **Push Code to GitHub:** Ensure your project is pushed to a GitHub repository.
2.  **Create Web Service:**
    -   Go to [Render Dashboard](https://dashboard.render.com/).
    -   Click **New +** -> **Web Service**.
    -   Connect your GitHub repository.
3.  **Configure Settings:**
    -   **Name:** `parkeasy-backend` (or similar).
    -   **Root Directory:** `server` (Important!).
    -   **Runtime:** Node.
    -   **Build Command:** `npm install`.
    -   **Start Command:** `node server.js`.
4.  **Environment Variables:**
    -   Scroll down to **Environment Variables**.
    -   Add `MONGO_URI`: Paste your MongoDB connection string from Phase 1.
    -   Add `JWT_SECRET`: Enter a secure random string (e.g., `my_super_secret_key_123`).
    -   Add `PORT`: `5001` (Optional, Render sets its own PORT usually, but good to have).
5.  **Deploy:** Click **Create Web Service**.
    -   Wait for the build to finish.
    -   Once live, copy the **Backend URL** (e.g., `https://parkeasy-backend.onrender.com`).

---

## 🌐 Phase 3: Frontend Deployment (Vercel)

1.  **Create Project:**
    -   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    -   Click **Add New...** -> **Project**.
    -   Import your GitHub repository.
2.  **Configure Settings:**
    -   **Framework Preset:** Create React App.
    -   **Root Directory:** Click "Edit" and select `client`.
3.  **Environment Variables:**
    -   Click **Environment Variables**.
    -   Key: `REACT_APP_BACKEND_URL`
    -   Value: Your Render Backend URL (from Phase 2, e.g., `https://parkeasy-backend.onrender.com`).
    -   *Note: Do NOT add a trailing slash `/`.*
4.  **Deploy:** Click **Deploy**.

---

## ✅ Verification

1.  Open your Vercel App URL.
2.  **Sign Up:** Create a new user. This tests the Backend connection + MongoDB write access.
3.  **Auto-Login:** Should happen immediately.
4.  **Book a Spot:** Tests authenticated API calls.

---

## ❓ FAQ

### Why is `JWT_SECRET` not in `.env` locally?
The code has a fallback: `process.env.JWT_SECRET || 'secret_key_123'`. This is why it works locally without configuration. **However**, for production (Render), you MUST set the `JWT_SECRET` environment variable to keep your users' tokens secure.

### CORS Policy
The backend is configured with `app.use(cors())`, which allows requests from any origin. This ensures your Vercel frontend can communicate with your Render backend without issues.
