import React from "react";
import featureProjects from "./FeatureProjectsDatabase";
import smallProjects from "./SmallProjectsDatabase";
import Project from "./FeatureProject.js";
import SmallProject from "./SmallProject";

export default function Projects() {
  const photo = require("../../../assets/img/javaScriptProjectPhotos/Seat-Booking.png");
  
  return (
    <div className="section section-nucleo-icons feature-projects">
      <h1 className="project-title" id="projects">
        Feature projects
      </h1>
      {featureProjects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
      <h1 className="project-title" id="projects">
        Small Projects
      </h1>
      <div className="small-projects">

      {smallProjects.map((project, index)=><SmallProject project={project} key={index}/>)}
      </div>
    </div>
  );
}
