import "./FooterStyle.css";

import React from 'react'

 function Footer() {
  return (
    <div className="footer">

        <div className="top">

            <div className="logo">
                <h1>Taveller</h1>
                <p>Select Your Destination</p>
            </div>

            <div>
                <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                <a href="/"><i className="fa-brands fa-behance-square"></i></a>
                <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
            </div>
      
        </div>



        <div className="bottom">

            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">Licences</a>
                <a href="/">All version</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">issues</a>
                <a href="/">project</a>
                <a href="/">twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">support</a>
                <a href="/">Troubleshoot</a>
                <a href="/">contact us</a>
                
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Trems and Services</a>
                <a href="/">Status</a>
                <a href="/">Licences</a>
            
            </div>

        </div>
      
    </div>
  )
}


export default Footer;