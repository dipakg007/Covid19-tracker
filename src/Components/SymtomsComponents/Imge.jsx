import React from "react";
import "./symt.css";

function Imge(props){
    return(
        <>
         <div className = "img" >
             <img alt="Fever" src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_fever.gif" data-atf="1" width="55px" height="55px"></img>
            <p className = "a1">Fever</p>
         </div>
         <div className = "img">
              <img alt="Dry cough" src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_cough.gif" data-atf="1" width="55px" height="55px"></img>
             <p className = "a1">Dry cough</p>
         </div>
         <div className = "img">
             <img alt="Tiredness" src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_tiredness.gif" data-atf="1" width="55px" height="55px"></img>
            <p className = "a1">Tiredness</p>
            </div>
        </>
     );
     
}
export default Imge;
