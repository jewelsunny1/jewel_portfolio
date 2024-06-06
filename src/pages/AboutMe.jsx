import React from 'react';
//still need to import profile picture from images folder
const styles= {
  container:{
    textAlign:'center',
    padding:"20px",
    backgroundColor:"#e0f7fa",
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    color: '#004f40'

  },
  image:{
    width:"150px",
    height:"150px",
    borderRadius:'50%',
    marginBottom:'20px'
  },

  paragraph:{
    maxWidth:'600px',
    lineHeight:"1.6"
  }
}
const AboutMe =() => {
  return(
    <div style={styles.container}>
      <h2>About Me</h2>
      <div>
        <img src="../../assets/images/#1.jpg" alt="profile-pic" style={styles.image}/>
        <p stlyle={styles.paragraph}>
        I am based in Dallas, TX, eager to change my career. Currently, enrolled in 3-month coding bootcamp in hopes of gaining valuable skills to help me as I take on this new journey!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
