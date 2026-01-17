import React from "react";
import ExperienceCard from "./ExperienceCard";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import "./ExperienceCardStyle.css";

function Experience() {
  return (
    <div className="experience-timeline">
        <h1 style={{ fontSize: "2.1em", padding: "140px 0 60px 0", color: "white" }} className="experience-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
      <ExperienceCard
        employer="Two F Capital"
        title="Mobile Application Developer"
        description={`Develope high-performance cross-platform mobile applications with Flutter framework, focusing on intuitive user experiences and scalable architectures. 
        Collaborate with teams to implement clean code practices, optimize performance, and deliver polished, user-centric products.`}
        startDate=" Nov 2024"
        endDate="present"
        icon={<FaLaptopCode />}
      />
      <ExperienceCard
        employer="A2SV(Africa to Silicon Valley)"
        title="Backend Engineer"
        description="Develop reliable and scalable backend services using Go (Golang), focusing on performance, maintainability, and clean architecture. Collaborate with cross-functional teams to design APIs, implement best practices, optimize system efficiency, and deliver robust, production-ready backend solutions."
        startDate="Dec 2025"
        endDate="Present"
        icon={<FaLaptopCode />}
      />
      <ExperienceCard
        employer="Hawassa University ICT Center"
        title="Flutter Developer Intern"
        description="Developed a Flutter application to digitalize the maintenance system for Hawassa University ICT Center, streamlining operations and user workflows. Integrated Firebase Firestore for secure authentication and data storage, alongside a real-time chat feature for seamless communication."
        startDate="Oct 2023"
        endDate="Jan 2024"
        icon={<FaLaptopCode />}
      />
    </div>
  );
}

export default Experience;
