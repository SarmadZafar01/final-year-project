import React from "react";
import imge from "../civik.png"
import "./aboutinfo.css";
import services from "../services.png";
import goal from "../goal.png";


function Aboutinfo(){
    return(
        <div>
  
  <div className='i1'>
        <img src={imge} alt="Car" />
        </div>
        <div className="p14">
        <p>Elevate your <span>shopping<br></br> experience</span> with our<br></br> one-stop car spare parts website..</p>
        </div>
        <div className="services">Our Services
        <div className="i2">
            <img src={services} alt="services" />
        </div>
        <div className="point">
            <p>Image Recognition</p>
        </div>

        </div>
        
        <div className="p15">Allow users to upload an image of<br></br> the car part they re looking for<br></br>. Image recognition can analyze the<br></br> image and suggest matching parts<br></br> from the inventory</div>
        <div className="point2">
            <p>Communication</p>
        </div>
        <div className="p16">This allows the user to communicate<br></br> with us to resolve any car problem<br></br> orthey need any information about<br></br> any part.</div>
        
        <div className="point3">
            <p>Modification</p>
        </div>
        <div className="p17">we use virtual 3D model of various<br></br> car models. Users can virtually place<br></br> additional parts on the model to<br></br>  visualizehow they would fit</div>
       <div className="Goal">Our Goals</div>
       <div className="i3">
       <img src={goal} alt="goal" />
       </div>
       <div className="goalpoint">
       Our aim is to provide a platform for
 car owners so that they can find exact spare parts<br></br>
 Simplifying car Modification with a user-friendly online platform<br></br>
 Finding the right spare parts easy and enjoyable for every car enthusiast.<br></br>
  The aim is to ensure that users' questions 
 and issues are promptly addressed
       </div>
        </div>
        

        
    )
}

export default Aboutinfo;