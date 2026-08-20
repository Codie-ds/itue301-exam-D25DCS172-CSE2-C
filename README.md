# MedCare+ Hospital Appointment System

This is the practical examination project for ITUE301 — Advanced Web Development Frameworks.

## Project Structure

This repository is split into two main sections:
- `/frontend`: The React application (Vite).
- `/backend`: The Express + MongoDB API.

## Frontend Setup and Run Command

1. Open a terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Backend Setup and Run Command

1. Open a new terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the server (defaults to port 8000 to avoid macOS AirPlay conflicts):
   ```bash
   node server.js
   ```
   *(or `npm start`)*

## MongoDB Setup

This project uses Mongoose to connect to a MongoDB Atlas cluster. The database contains three collections:
- **Patients**: Stores patient demographics and blood group.
- **Doctors**: Stores doctor details and availability.
- **Appointments**: Connects patients and doctors with date, time slot, and status.

## Required Environment Variables

You must create a `.env` file in the root of the project (alongside this README). Use `.env.example` as a template.

Required variables:
- `MONGO_URI`: Your MongoDB Atlas connection string.
- `PORT`: The port for the backend server (set to 8000 by default).