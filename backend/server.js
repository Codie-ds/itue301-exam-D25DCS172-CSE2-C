require('dotenv').config({ path: '../.env' }); // Load .env from root
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Doctor = require('./models/Doctor');
const Appointment = require('./models/Appointment');
const Patient = require('./models/Patient'); // included for reference

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB via Mongoose'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Custom requestLogger Middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path} [${new Date().toISOString()}]`);
  next();
});

// REST Endpoints

// GET /api/v1/doctors
app.get('/api/v1/doctors', async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ success: true, data: doctors });
  } catch (error) {
    next(error);
  }
});

// GET /api/v1/appointments
app.get('/api/v1/appointments', async (req, res, next) => {
  try {
    const appointments = await Appointment.find().populate('doctorId').populate('patientId');
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/appointments
app.post('/api/v1/appointments', async (req, res, next) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: newAppointment });
  } catch (error) {
    next(error);
  }
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error Details:', err);
  
  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      details: messages
    });
  }

  // Handle Mongoose Cast Errors (e.g. invalid ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: `Invalid ${err.path}: ${err.value}`
    });
  }

  // Default to 500 Server Error
  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
