import React from 'react';
import {Link} from 'react-router-dom';

const styles={
navbar:{
  backgroundcolor:'#333',
  color:'#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center'
},

  navLinks:{
    listStyleType:'none',
    margin:0,
    padding:0,
    display:'flex',
    width:'100%'

  },

  navLinkItem:{
    marginLeft:'10px',
    width:'100%'
  },

  navLink:{
    color: '#004f40',
    textDecoration:'none',
    width:"100%",
    display:"block",
    padding:"10px",
    textAlign:"center",
    fontSize:"20px"
  }

}

const Navbar =()=>(
  <nav style={styles.navbar}>
    <ul style={styles.navLinks}>
      <li style={styles.navLinkItem}><Link to = "/" style={styles.navLink}>About</Link></li>
      <li style={styles.navLinkItem}><Link to = "/portfolio" style={styles.navLink}>Portfolio</Link></li>
      <li style={styles.navLinkItem}><Link to = "/contact" style={styles.navLink}>Contact</Link></li>
      <li style={styles.navLinkItem}><Link to = "/resume" style={styles.navLink}>Resume</Link></li>

    </ul>
  </nav>
);

export default Navbar;