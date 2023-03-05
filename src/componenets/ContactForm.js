import React from 'react'
import "./ContactStyle.css"

 function ContactForm() {
  return (
    <div className='form-container'>

      <h1>Send A Message To Us.!</h1>

        <form action="">

          <input type="text" name="" placeholder='Enter Your Name'/>
          <input type="email" name="" placeholder='Enter Your Email'/>
          <input type="phone" name="" placeholder='Enter Your Subject'/>
           <textarea rows="4" placeholder='Message'></textarea>
         
         <button className='s-btn'>Send Message</button>
          
        </form>
      
    </div>
  )
}

export default ContactForm;
