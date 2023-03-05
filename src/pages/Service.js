import React from 'react'
import Navbar from '../componenets/Navbar';
import heroImg from "../asset/1.jpg"
import Hero from '../componenets/Hero';
import Footer from '../componenets/Footer';
import Trip from '../componenets/Trip';


 function Service() {
  return (
    <div>
            <Navbar/>
     <Hero 
        cName="heroAbout"
        heroImg={heroImg}
        title="Services Where You will Get More.!"
        text="Happy Journey Happy Nation"
        buttonText="Service"
        url="/"
        btnClass="show"
        />
            <Trip/>

        <Footer/>
      
    </div>
  )
}


export default Service;