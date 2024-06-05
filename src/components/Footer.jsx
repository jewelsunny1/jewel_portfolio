//This is where I want to have all my href links to my github, linkedin, and stackoverflow
import React from 'react';

const Footer=()=>(  
  <footer>
  <div>
    <a href="https://github.com/jewelsunny1" target="blank" rel="noopener noreferrer">Github</a>
    <a href="https://www.linkedin.com/in/jewel-sunny-172a641a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

       {/*So, when you use target="_blank" rel="noopener noreferrer" in an anchor tag, you're instructing the browser to open the linked page in a new tab while also implementing security measures to protect against potential vulnerabilities and enhance user privacy */}
  </div>
  </footer>
)

export default Footer;