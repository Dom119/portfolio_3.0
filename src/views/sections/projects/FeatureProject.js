import React from "react";
import { Button } from "reactstrap";

export default function Project({ project }) {
  const { title, desc, linkWeb, linkGit, photo } = project;
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
              style={{ color: "white"}}
              href={linkWeb}
              target="_blank"
            >
              Website
            </Button>
            <Button
              className="btn-round myBtn"
              color="danger"
              style={{ color: "white" }}
              href={linkGit}
              target="_blank"
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="feature-project-img">
          <img src={photo} alt="Project photo" />
        </div>
      </div>
    </div>
  );
}
