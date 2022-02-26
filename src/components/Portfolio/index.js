import React from "react";
import Projects from "../Projects";
function Portfolio() {
  const projects = [
  
    {
      title: "Note-Taker",
      image: "notetaker.gif",
      repository: "https://github.com/cartersupple/Note-Taker",
      description: "An easy way to store your thoughts.",
      deployment: "https://carter-note-taker.herokuapp.com/"
    },  
    {
      title: "King-OTH",
      image: "koth.gif",
      repository: "https://github.com/cartersupple/King-OTH",
      description: "A social NFT rating platform similar to Tinder. User interaction generates public sentiment information.",
      deployment: "https://nc-king-of-the-hill.herokuapp.com/"
    },   {
      title: "Weather Dashboard",
      image: "weatherdash.png",
      repository: "https://github.com/cartersupple/Weather-Dashboard",
      description: "Check the weather near you. Or far away.",
      deployment: "https://cartersupple.github.io/Weather-Dashboard/"
    },   {
      title: "On The Go",
      image: "onthego.png",
      repository: "https://github.com/cartersupple/on-the-go",
      description: "A bathroom finder app for uber drivers made by an uber driver.",
      deployment: "https://cartersupple.github.io/on-the-go/"
    },   {
      title: "Work Day Scheduler",
      image: "workdaysch.png",
      repository: "https://github.com/cartersupple/Work-Day-Scheduler",
      description: "Plan your day with a hourly scheduler.",
      deployment: "https://cartersupple.github.io/Work-Day-Scheduler/"
    },   {
      title: "Code Quiz",
      image: "codequiz.png",
      repository: "https://github.com/cartersupple/Challenge-Code-Quiz",
      description: "A flashcard style memorization game to learn coding terms.",
      deployment: "https://cartersupple.github.io/Challenge-Code-Quiz/"
    },  
  ];
  return (
    <div>
      <Projects projects={projects} />
    </div>
  
  );
}
export default Portfolio;