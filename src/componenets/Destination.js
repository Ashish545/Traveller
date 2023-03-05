import React from 'react'
import "./DestinationStyle.css";

import desImg from "../asset/1.jpg"
import desImg2 from "../asset/5.jpg"
import desImg3 from "../asset/4.jpg"
import desImg4 from "../asset/9.jpg"
import DestinationData from './DestinationData';

 function Destination() {
  return (
    <div className='Destination'>
        <h1>Popular Destination</h1>
        <p>Tours Give You opportunity To A See Lot, Within A Time Frame</p>
         

         {/* <div className="first-des">
            <div className="des-text">
                <h2> Tall Volcano, Batangas</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Tempore, quod, voluptatibus 
                    culpa fugit voluptates ullam aut aperiam quidem 
                    adipisci, commodi aliquid. Quis, quasi, reiciendis 
                    reprehenderit, magni 
                    quam officiis optio eum laboriosam aliquid aspernatur assumenda. Quo autem atque, eaque, ab consequuntur ad saepe alias, 
                    et doloremque doloribus odit dicta. 
                    Dolorem magni sed libero quis, aspernatur eligendi
                    , omnis fuga et deserunt, officiis voluptate odio
                     accusantium aperiam. Accusantium ut, voluptatibus
                      cumque illo iure qui quos doloribus asperiores
                       beatae quo? Ipsum facere aliquid blanditiis 
                       accusantium, consequuntur ipsam, tenetur deserunt alias iste vitae assumenda nostrum. Quidem incidunt deserunt eius impedit vel
                        quis sed nam error consequuntur, temporibus
                        doloremque dolorem excepturi qui, corrupti provident dignissimos voluptas vero natus eveniet.
                        .</p>
            </div>
        

         <div className="image">
            <img src={desImg} alt="img" />
            <img src={desImg2} alt="img" />
         </div>

         </div> */}
         <DestinationData

         heading="Mt. Daguldul, Batangas"
         text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quod, voluptatibus culpa fugit voluptates ullam aut aperiam quidem adipisci, commodi aliquid. Quis, quasi, reiciendis reprehenderit, magni quam officiis optio eum laboriosam aliquid aspernatur assumenda. Quo autem atque, eaque, ab consequuntur ad saepe alias, et doloremque doloribus odit dicta. Dolorem magni sed libero quis, aspernatur eligendi , omnis fuga et deserunt, officiis voluptate odio accusantium aperiam. Accusantium ut, voluptatibus cumque illo iure qui quos doloribus asperiores beatae quo? Ipsum facere aliquid blanditiis accusantium, consequuntur ipsam, tenetur deserunt alias iste vitae assumenda nostrum. Quidem incidunt deserunt eius impedit vel quis sed nam error consequuntur, temporibus doloremque dolorem excepturi qui, corrupti provident dignissimos voluptas vero natus "
         desImg={desImg}
         desImg2={desImg2}
         desImg3={desImg3}
         desImg4={desImg4}
         />


    </div>
  )
}


export default Destination;
