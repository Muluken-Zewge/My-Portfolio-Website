import { Container } from "react-bootstrap";
import Github from "./Github"
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills(){
    return (
        <Container>
            <h1 style={{ fontSize: "2.1em", padding: "140px 0 40px 0", color: "white" }}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        </Container>
    )
}

export default Skills;