import React from 'react';
import "./TripStyle.css";

import desImg from "../asset/6.jpg"
import desImg2 from "../asset/5.jpg"
import desImg3 from "../asset/9.jpg"
import TripData from './TripData';


function Trip() {
  return (
    <div className="trip">

        <h1>Recent Trip</h1>
        <p>You Can Discover Unique Destination Using Google Maps. </p>
     

 
 <div className="tripcard">


        <TripData
              
              desImg={desImg}
             
              heading="Indonesia"
              text="onsequuntur ad saepe alias, et doloremque doloribus odit dicta. Dolorem magni sed libero quis, aspernatur eligendi , omnis fuga et deserunt, officiis voluptate odio accusantium aperiam. Accusantium ut, voluptatibus cumque illo iure qui quos doloribus asperiores beatae quo? Ipsum facere aliquid blanditiis accusantium, consequuntur ipsam, tenetur deserunt alias iste vitae assumenda nostrum. Quidem incidunt deserunt eius impedit vel quis sed nam error consequuntur, temporibus doloremque dolorem excepturi qui, corrupti provident dignissimos voluptas vero natus"

            
            />
        <TripData
              
            
              desImg={desImg2}
        
              heading="Malesia"
              text="onsequuntur ad saepe alias, et doloremque doloribus odit dicta. Dolorem magni sed libero quis, aspernatur eligendi , omnis fuga et deserunt, officiis voluptate odio accusantium aperiam. Accusantium ut, voluptatibus cumque illo iure qui quos doloribus asperiores beatae quo? Ipsum facere aliquid blanditiis accusantium, consequuntur ipsam, tenetur deserunt alias iste vitae assumenda nostrum. Quidem incidunt deserunt eius impedit vel quis sed nam error consequuntur, temporibus doloremque dolorem excepturi qui, corrupti provident dignissimos voluptas vero natus"

            
            />
        <TripData
              
            
              desImg={desImg3}
              heading="NewYork"
              text="onsequuntur ad saepe alias, et doloremque doloribus odit dicta. Dolorem magni sed libero quis, aspernatur eligendi , omnis fuga et deserunt, officiis voluptate odio accusantium aperiam. Accusantium ut, voluptatibus cumque illo iure qui quos doloribus asperiores beatae quo? Ipsum facere aliquid blanditiis accusantium, consequuntur ipsam, tenetur deserunt alias iste vitae assumenda nostrum. Quidem incidunt deserunt eius impedit vel quis sed nam error consequuntur, temporibus doloremque dolorem excepturi qui, corrupti provident dignissimos voluptas vero natus"

            
            />
 </div>
     
       
    </div>
  )
}

export default Trip;