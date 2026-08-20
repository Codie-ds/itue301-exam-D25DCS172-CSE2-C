import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import AppointmentCard from '../components/AppointmentCard';
import './BookingPage.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    timeSlot: '',
    reason: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      patientName: '',
      doctorName: '',
      date: '',
      timeSlot: '',
      reason: ''
    });
    setIsConfirmed(false);
  };

  return (
    <div className="page-wrapper booking-page">
      <div className="container">
        <div className="booking-layout">
          <div className="booking-content">
            <Reveal>
              <h1 className="section-heading">YOUR TIME.<br/>YOUR CARE.</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-text booking-subtitle">
                Book your appointment in a few simple steps. Our specialists are ready to help you on your health journey.
              </p>
            </Reveal>
          </div>
          
          <div className="booking-form-wrapper">
            <Reveal delay={0.4} y={120}>
              {!isConfirmed ? (
                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">PATIENT NAME</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">SPECIALIST</label>
                    <select 
                      className="form-input" 
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a doctor</option>
                      <option value="DR. RAHUL SHAH (Cardiologist)">DR. RAHUL SHAH (Cardiologist)</option>
                      <option value="DR. ANITA DESAI (Neurologist)">DR. ANITA DESAI (Neurologist)</option>
                      <option value="DR. PRIYA SHARMA (Pediatrician)">DR. PRIYA SHARMA (Pediatrician)</option>
                    </select>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">DATE</label>
                      <input 
                        type="date" 
                        className="form-input" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">TIME SLOT</label>
                      <select 
                        className="form-input" 
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:30 PM">04:30 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">REASON FOR VISIT</label>
                    <textarea 
                      className="form-input form-textarea" 
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms or reason for visit"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'PROCESSING...' : 'CONFIRM APPOINTMENT'} 
                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>
                </form>
              ) : (
                <div className="confirmation-state">
                  <div className="success-icon">
                    <CheckCircle size={64} color="var(--med-green)" />
                  </div>
                  <h2>BOOKING CONFIRMED</h2>
                  <p className="body-text">Your appointment has been successfully scheduled.</p>
                  
                  <div className="confirmation-card-wrapper">
                    <AppointmentCard 
                      patientName={formData.patientName}
                      doctorName={formData.doctorName.split(' (')[0]}
                      date={formData.date}
                      timeSlot={formData.timeSlot}
                      status="confirmed"
                    />
                  </div>
                  
                  <button onClick={resetForm} className="btn-secondary">
                    BOOK ANOTHER APPOINTMENT
                  </button>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
