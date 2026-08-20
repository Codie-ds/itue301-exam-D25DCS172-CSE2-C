import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ patientName, doctorName, date, timeSlot, status }) => {
  return (
    <div className="appointment-card">
      <div className="appt-header">
        <span className={`appt-status status-${status.toLowerCase()}`}>
          {status.toUpperCase()}
        </span>
        <span className="appt-date">{date}</span>
      </div>
      
      <div className="appt-body">
        <div className="appt-info-block">
          <span className="appt-label">PATIENT</span>
          <h4 className="appt-value">{patientName}</h4>
        </div>
        
        <div className="appt-info-block">
          <span className="appt-label">DOCTOR</span>
          <h4 className="appt-value">{doctorName}</h4>
        </div>
        
        <div className="appt-info-block">
          <span className="appt-label">TIME SLOT</span>
          <h4 className="appt-value">{timeSlot}</h4>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
