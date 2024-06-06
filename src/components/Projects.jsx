import React from 'react';
//need to comeback and add different projects

const styles ={
  projectCard:{
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    color: '#004f48'
  },
  image:{
    width: '100%',
    borderRadius: '4px',
  },

  heading:{
    marginTop:'8px'
  },
  projLink:{
    cursor:'pointer',
    color:"#007bff",
    textDecoration:"none",
    transitions:'color 0.3s ease'

  }
};

const Projects = () => {
  return(
    <div>
      <h2> Projects</h2>
      <div className="project-list">
        <div className="project-card" style={styles.projectCard}> 
        <img src="project1-image.jpg" alt="Proj 1 img" style={styles.image}/>
        <h3 style={styles.heading}>Project 1:NoteTaker</h3>
        <p>Descritpion of project:</p>
        <a style={styles.projLink}href="https://github.com/jewelsunny1/note-taker" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card" style={styles.projectCard}> 
        <img src="project1-image.jpg" alt="Proj 1 img" style={styles.image}/>
        <h3 style={styles.heading}>Project 1:NoteTaker</h3>
        <p>Descritpion of project:</p>
        <a style={styles.projLink}href="https://github.com/jewelsunny1/note-taker" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card" style={styles.projectCard}> 
        <img src="project1-image.jpg" alt="Proj 1 img" style={styles.image}/>
        <h3 style={styles.heading}>Project 1:NoteTaker</h3>
        <p>Descritpion of project:</p>
        <a style={styles.projLink}href="https://github.com/jewelsunny1/note-taker" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card" style={styles.projectCard}> 
        <img src="project1-image.jpg" alt="Proj 1 img" style={styles.image}/>
        <h3 style={styles.heading}>Project 1:NoteTaker</h3>
        <p>Descritpion of project:</p>
        <a style={styles.projLink}href="https://github.com/jewelsunny1/note-taker" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  )
};

export default Projects;

