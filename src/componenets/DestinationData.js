import React from 'react';
import "./DestinationStyle.css";
// import desImg from "../asset/5.jpg"
// import desImg2 from "../asset/2.jpg"
import "./DestinationStyle.css";


 function DestinationData({heading,text,desImg,desImg2,desImg3,desImg4}) {
  return (
    <div>
        <div className="first-des">
            <div className="des-text">
                <h2>{heading}</h2>

                <p>{text}</p>
              
            </div>
        

         <div className="image">
            <img src={desImg} alt="img" />
            <img src={desImg2} alt="img" />
         </div>

         </div>

         {/* /////////////////////// */}

         <div className="second-des">
            <div className="des-text">
                <h2>{heading}</h2>

                <p>{text}</p>
              
            </div>
        

         <div className="image">
            <img src={desImg4} alt="img" />
            <img src={desImg3} alt="img" />
         </div>

         </div>
      
    </div>
  )
}


export default DestinationData;