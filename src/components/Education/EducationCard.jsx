import React from "react";
import Card from "react-bootstrap/Card";
import "./EducationCardStyle.css"; 

function EducationCard({
  school,
  title,
  description,
  startDate,
  endDate,
  icon,
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dates">
        <span className="purple">{startDate}</span> - {endDate || "Present"}
      </div>

      <div className="timeline-content">
        <div className="timeline-icon">{icon}</div>
        <Card className="education-card-view">
          <Card.Body>
              <p className="card-title">{title}</p>
              <p className="card-school">{school}</p>
              <p className="card-description">{description}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EducationCard;
