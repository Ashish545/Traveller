import React from 'react'
import Hero from '../componenets/Hero';
import Navbar from '../componenets/Navbar';
import heroImg from "../asset/12.jpg"
import Destination from '../componenets/Destination';
import Trip from '../componenets/Trip';
import Footer from '../componenets/Footer';

 function Home() {
  return (
    <div>

        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={heroImg}
        title="Welcome To Traveller"
        text="Select Your Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>

        
      
    </div>
  )
}

export default Home;
