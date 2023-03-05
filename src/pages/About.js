import React from 'react'

import heroImg from "../asset/3.jpg"
import AboutUs from '../componenets/AboutUs';
import Footer from '../componenets/Footer';
import Hero from '../componenets/Hero';
import Navbar from '../componenets/Navbar';
import Trip from '../componenets/Trip';

function About() {
  return (
    <div>
     <Navbar/>
     <Hero 
        cName="heroAbout"
        heroImg={heroImg}
        title="Know More About Us"
        text="Happy Journey Happy Nation"
        buttonText="Get Info"
        url="/"
        btnClass="show"
        />

     
        <AboutUs/>
       <Footer/>
      
    </div>
  )
}


export default  About;
