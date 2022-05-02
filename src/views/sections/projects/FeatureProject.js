import React from "react";
import { Button } from "reactstrap";

export default function Project({ project }) {
  const { title, desc, linkWeb, linkGit, photo, technologies } = project;
  return (
    <div>
      <div className="feature">
        <div className="feature-project-desc">
          <h1>{title}</h1>
          <h5>{desc}</h5>
          <div className="link">
            <Button
              className="btn-round mr-1 myBtn "
              color="danger"
              style={{ color: "white", marginBottom: "0px" }}
              href={linkWeb}
              target="_blank"
            >
              View Website
            </Button>
            <Button
              className="btn-round myBtn"
              color="danger"
              style={{ color: "white", marginBottom: "0px" }}
              href={linkGit}
              target="_blank"
            >
              Source Code
            </Button>
          </div>
          <div className="techs">
            {technologies.map((tech, index) => (
              <span className="tech" key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="feature-project-img">
          <img className="fpi" src={photo} alt="Project photo" style={{height: "auto"}} />
        </div>
      </div>
    </div>
  );
}
