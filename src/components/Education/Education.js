import React from "react";
import EducationCard from "./EducationCard";
import { FaBookOpen } from "react-icons/fa";
//import "./EducationCardStyle.css";

function Education() {
  return (
    <div className="education-timeline">
        <h1 style={{ fontSize: "2.1em", padding: "140px 0 60px 0", color: "white" }} className="education-heading">
        Educational <strong className="purple">Background</strong>
        </h1>
      <EducationCard
        school="Jimma Institute of Technology"
        title="BSc in Computer Engineering"
        description={
          <>
          <span className="purple">Coursework </span> 
          : Data Structures and Algorithms, Software Engineering, Database systems, Object Oriented Programming
          <br />
          <span className="purple">CGPA:</span> 3.70
        </>
    }
        startDate=" Oct 2019"
        endDate="July 2024"
        icon={<FaBookOpen />}
      />
      <EducationCard
        school="A2SV (Africa to Silicon Valley)"
        title="Data Structures and Algorithms"
        description= {
          <>
          A2SV upskills African tech talents and connects them with top tech companies resulting in 60+ offers from <span className="purple">Google, Amazon, Meta, Palantir, Databricks, and Bloomberg</span>.
          </>
        }
        startDate="Jan 2025"
        endDate="present"
        icon={<FaBookOpen />}
      />
    </div>
  );
}

export default Education;
