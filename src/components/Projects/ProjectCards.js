import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";

function ProjectCards(props) {

const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Card className="project-card-view">
    <div style={{ textAlign: "center", marginBottom: "10px", marginTop: "20px" }}>
            <img
              src={props.imgPath} // Screenshot path
              alt="project-screenshot"
              style={{
                width: "50%",
                height: "auto",
                objectFit: "cover", // Maintain aspect ratio
              }}
            />
        </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
            variant="primary"
            onClick={() => setModalShow(true)}
            style={{ marginLeft: "10px" , marginBottom: "15px"}}
        >
            <CgWebsite /> &nbsp;
            {"See More"}
        </Button>

        {"\n"}
        {"\n"}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        </div>
        
      </Card.Body>
    </Card>

    {/* Modal Component */}
    <Modal
        contentClassName="custom-modal"
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title className="purple">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Overview */}
          <h6 className="purple">Overview</h6>
          <p>
             {props.details.overview}
          </p>

          {/* Key Features */}
          <h6 className="purple">Key Features</h6>
          <ul>
  {Array.isArray(props.details.keyFeatures) &&
  props.details.keyFeatures.length > 0 &&
  typeof props.details.keyFeatures[0] === "object" ? (
    // Grouped Layout
    props.details.keyFeatures.map((group, groupIndex) => (
      <li key={groupIndex}>
        <span>{group.category}</span>
        <ul style={{ fontSize: "0.9rem" }}>
          {group.features.map((feature, featureIndex) => (
            <li key={featureIndex}>
              {feature.includes(":") ? (
                <>
                  <span className="purple">{feature.split(":")[0]}</span>
                  {`: ${feature.split(":")[1]}`}
                </>
              ) : (
                <span>{feature}</span> // Render the whole feature in white if no colon
              )}
            </li>
          ))}
        </ul>
      </li>
    ))
         ) : (
          // Flat Layout
          props.details.keyFeatures.map((feature, index) => (
          <li key={index}>
            <strong>{feature.split(":")[0]}</strong>
            {feature.includes(":") && `: ${feature.split(":")[1]}`}
          </li>
         ))
        )}
       </ul>

          {/* Tech Stack */}
          <h6>Tech Stack</h6>
          <ul style={{ fontSize: "0.9rem" }}>
            {props.details.techStack.map((techStack, index) => (
              <li key={index}>
                <span className="purple">{techStack.split(":")[0]}</span>
                {techStack.includes(":") && `: ${techStack.split(":")[1]}`}
              </li>
            ))}
          </ul>

          {/* Development Details */}
          <h6 className="purple"><strong>Development Details</strong></h6>
          <p  style={{ fontSize: "0.9rem" }}>
             <span className="purple">Project Type</span>: {props.details.projectType}
          </p>
          <p  style={{ fontSize: "0.9rem" }}>
            <span className="purple">My Role</span>: {props.details.role}
          </p>
          <p>
            <span style={{ fontSize: "0.9rem" }} className="purple">Skills Developed</span>
            <ul  style={{ fontSize: "0.9rem" }}>
            {props.details.skillsDeveloped.map((techStack, index) => (
              <li key={index}>{techStack}</li>
            ))}
          </ul>
          </p>
          <p>
            <span style={{ fontSize: "0.9rem" }} className="purple">Challenges</span> 
            <ul  style={{ fontSize: "0.9rem" }}>
            {props.details.challenges.map((challenges, index) => (
              <li key={index}>
                {challenges}
              </li>
            ))}
          </ul>
          </p>

          {/* Screenshots */}
          <h6 className="purple">Screenshots</h6>
          <div className="modal-screenshots"  
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            justifyContent: "center",
         }}
         >
            {props.details.screenshots.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Screenshot-${index}`}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                }}
              />              
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  );
}
export default ProjectCards;
