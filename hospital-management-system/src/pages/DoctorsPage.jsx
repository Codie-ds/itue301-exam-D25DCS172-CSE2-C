import React, { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import DoctorCard from '../components/DoctorCard';
import './DoctorsPage.css';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, this would fetch from the Express API
    // GET /api/v1/doctors
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        // Simulate API call delay to show beautiful loading state
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data that would normally come from API
        const mockData = [
          { id: 1, name: "DR. RAHUL SHAH", specialization: "CARDIOLOGIST", availability: true },
          { id: 2, name: "DR. ANITA DESAI", specialization: "NEUROLOGIST", availability: true },
          { id: 3, name: "DR. SAMIR PATEL", specialization: "ORTHOPEDIC", availability: false },
          { id: 4, name: "DR. PRIYA SHARMA", specialization: "PEDIATRICIAN", availability: true },
          { id: 5, name: "DR. KUNAL VERMA", specialization: "DERMATOLOGIST", availability: true },
          { id: 6, name: "DR. SNEHA RAO", specialization: "PSYCHIATRIST", availability: false }
        ];
        
        setDoctors(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch doctors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <Reveal>
            <span className="micro-label">OUR TEAM</span>
            <h1 className="hero-heading page-title">MEET YOUR<br/>SPECIALISTS</h1>
          </Reveal>
        </div>
      </div>

      <div className="container doctors-content">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="micro-label">FETCHING DOCTORS...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="btn-secondary">TRY AGAIN</button>
          </div>
        ) : (
          <div className="doctors-grid-large">
            {doctors.map((doctor, idx) => (
              <Reveal key={doctor.id} delay={idx * 0.1} y={50}>
                <DoctorCard index={idx + 1} doctor={doctor} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
