import React from "react";
import Projects from "../Projects";
function Portfolio() {
  const projects = [
    {
      title: "E-commerce backend",
      image: "e-commerce-backend.gif",
      repository: "https://github.com/cartersupple/e-commerce-backend",
      description: "",
      deployment: ""
    },
    {
      title: "Note-Taker",
      image: "notetaker.gif",
      repository: "https://github.com/cartersupple/Note-Taker",
      description: "",
      deployment: ""
    },  
    {
      title: "King-OTH",
      image: "koth.gif",
      repository: "https://github.com/cartersupple/King-OTH",
      description: "",
      deployment: ""
    },   {
      title: "Team Profile Generator",
      image: "teamprofilegen.gif",
      repository: "https://github.com/cartersupple/Team-Profile-Generator-",
      description: "",
      deployment: ""
    },   {
      title: "Read.me Generator",
      image: "readmegen.gif",
      repository: "https://github.com/cartersupple/read.me-generator",
      description: "",
      deployment: ""
    },   {
      title: "Weather Dashboard",
      image: "weatherdash.png",
      repository: "https://github.com/cartersupple/Weather-Dashboard",
      description: "",
      deployment: ""
    },   {
      title: "On The Go",
      image: "onthego.png",
      repository: "https://github.com/cartersupple/on-the-go",
      description: "",
      deployment: ""
    },   {
      title: "Work Day Scheduler",
      image: "workdaysch.png",
      repository: "https://github.com/cartersupple/Work-Day-Scheduler",
      description: "",
      deployment: ""
    },   {
      title: "Code Quiz",
      image: "codequiz.png",
      repository: "https://github.com/cartersupple/Challenge-Code-Quiz",
      description: "",
      deployment: ""
    },  
  ];
  return (
    <div>
      <Projects projects={projects} />
    </div>
  
  );
}
export default Portfolio;