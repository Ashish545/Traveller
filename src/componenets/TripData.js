import React from 'react'
import "./TripStyle.css"

function TripData({desImg,desImg2,desImg3,heading,text}) {
  return (

    

    <div className="t-card">

         <div className="t-image">
            <img src={desImg} alt="image" />

         </div>

            <h4>{heading}</h4>
            <p>{text}</p>
     
    
    </div>
      
    
  )
}

export default TripData;