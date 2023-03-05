import React from 'react'
import Hero from '../componenets/Hero';
import Navbar from '../componenets/Navbar';
import heroImg from"../asset/2.jpg";
import Footer from '../componenets/Footer';
import ContactForm from '../componenets/ContactForm';


 function Contact() {
  return (
    <div>

<Navbar/>
     <Hero
        cName="heroAbout"
        heroImg={heroImg}
        title="Welcome You Share Your Destination"
        text="Happy Journey Happy Nation"
        buttonText="Get Ready"
        url="/"
        btnClass="show"
        />
        <ContactForm/>
       
        <Footer/>
      
    </div>
  )
}


export default Contact;