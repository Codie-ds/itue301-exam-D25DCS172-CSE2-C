import React from 'react';
import { ArrowRight } from 'lucide-react';
import './DoctorCard.css';

const DoctorCard = ({ doctor, index }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image-wrapper">
        <div className="doctor-image-placeholder">
          {/* We use a placeholder div that we can style with CSS if no image is available. In a real app, an img tag would go here. */}
          <div className="placeholder-content">
             MD
          </div>
        </div>
      </div>
      
      <div className="doctor-info">
        <div className="doctor-meta">
          <span className="doctor-index">{String(index).padStart(2, '0')}</span>
          <span className={`doctor-availability ${doctor.availability ? 'available' : 'unavailable'}`}>
            {doctor.availability ? 'AVAILABLE ●' : 'UNAVAILABLE ○'}
          </span>
        </div>
        
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialization">{doctor.specialization}</p>
        
        <div className="doctor-arrow">
          <ArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
