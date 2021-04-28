import React from "react";
import male from './images/male.png'
import female from './images/female.png'
import none from './images/none.png'

export const Contact = ({...props})=>{        
        return(   
                     
            <div className="contact">
                
                {props.contact.gender ==="male" &&<img className="icon-gender" src={male} alt="male"/>}
                {props.contact.gender ==="female" &&<img className="icon-gender" src={female} alt="female"/>}
                {props.contact.gender ===undefined &&<img className="icon-gender" src={none} alt="none"/>}            
                <div className = "info">            
                 <h3>{props.contact.firstName} {props.contact.lastName}</h3>
                    <span>{props.contact.phone}</span> 
                </div>
                
               
            </div>
        )
}


                
           