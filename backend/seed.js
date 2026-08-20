require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');
const Appointment = require('./models/Appointment');

const seedDoctors = [
  { name: "DR. RAHUL SHAH", specialisation: "CARDIOLOGIST", available: true },
  { name: "DR. ANITA DESAI", specialisation: "NEUROLOGIST", available: true },
  { name: "DR. SAMIR PATEL", specialisation: "ORTHOPEDIC", available: false },
  { name: "DR. PRIYA SHARMA", specialisation: "PEDIATRICIAN", available: true },
  { name: "DR. KUNAL VERMA", specialisation: "DERMATOLOGIST", available: true },
  { name: "DR. SNEHA RAO", specialisation: "PSYCHIATRIST", available: false }
];

const seedPatients = [
  { name: "John Doe", email: "john@example.com", phone: "1234567890", bloodGroup: "O+", age: 34 },
  { name: "Jane Smith", email: "jane@example.com", phone: "0987654321", bloodGroup: "A-", age: 28 },
  { name: "Michael Johnson", email: "michael@example.com", phone: "5551234567", bloodGroup: "B+", age: 45 }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
    
    // Clear existing data
    await Doctor.deleteMany();
    await Patient.deleteMany();
    await Appointment.deleteMany();
    console.log("Cleared old data");
    
    // Insert new doctors
    const doctors = await Doctor.insertMany(seedDoctors);
    console.log("Seeded Doctors");

    // Insert new patients
    const patients = await Patient.insertMany(seedPatients);
    console.log("Seeded Patients");

    // Create dummy appointments using the inserted _ids
    const seedAppointments = [
      {
        patientId: patients[0]._id,
        doctorId: doctors[0]._id,
        date: new Date('2026-08-25'),
        timeSlot: '09:00 AM',
        status: 'confirmed',
        reason: 'Routine checkup'
      },
      {
        patientId: patients[1]._id,
        doctorId: doctors[1]._id,
        date: new Date('2026-08-26'),
        timeSlot: '11:30 AM',
        status: 'pending',
        reason: 'Headaches'
      },
      {
        patientId: patients[2]._id,
        doctorId: doctors[2]._id,
        date: new Date('2026-08-27'),
        timeSlot: '02:00 PM',
        status: 'cancelled',
        reason: 'Knee pain'
      }
    ];

    await Appointment.insertMany(seedAppointments);
    console.log("Seeded Appointments");

    console.log("✅ Database completely seeded with dummy Doctors, Patients, and Appointments!");
    
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
};

seedDB();
