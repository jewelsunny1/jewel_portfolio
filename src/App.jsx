import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer'

const style={
  page:{
    backgroundColor: "lightblue"
  }
}

function App(){
  return(
    
    <>
    <Navbar/> {/*Renders Navbar component */}
    <Header/>{/*Render header component */}
    <div style={style.page}> 
    <Outlet/> {/*It serves as a placeholder where child routes will be rendered. */}
    </div>
    <Footer/>{/*Render Footer componenet */}
    </>
    
  );
}

export default App;
