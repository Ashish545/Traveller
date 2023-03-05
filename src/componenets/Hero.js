import React from 'react'


import "./HeroStyle.css";

 function Hero(props) {
  return (
    <div className={props.cName}>

        <img src={props.heroImg} alt="heroimg" />

        <div className="heroText">
          
            <h1>{props.title}</h1>
            <p>{props.text}</p>
               <a className={props.btnClass} href={props.url}><button>{props.buttonText}</button></a>
        </div>
      
    </div>
  )
}

export default Hero;