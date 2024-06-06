import React from "react";
import resumePDF from "../assets/resume.txt";

const Resume = () =>{
  return(
    <div>
      <h2>Resume</h2>
      <a href ={resumePDF}></a>
    </div>
  );
};

export default Resume;