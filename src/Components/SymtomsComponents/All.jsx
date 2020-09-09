import React from "react";
import "./symt.css";
import Imge from "./Imge";
import Prevention from "./Prevention";

function All() {
  return (
    <div>
        <div className="card">
            <div className = "card__info">
                <h1> Symptom</h1>
                <div className="sy_img">
                    <Imge />
                </div>
                <div className="content_sy">
                    COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
                    Most common symptoms: fever dry cough  tiredness 
                    To prevent the spread of COVID-19:
Clean your hands often. Use soap and water, or an alcohol-based hand rub.
Maintain a safe distance from anyone who is coughing or sneezing.
Wear a mask when physical distancing is not possible.
Don’t touch your eyes, nose or mouth.
Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
Stay home if you feel unwell.
If you have a fever, cough and difficulty breathing, seek medical attention.
Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.
Masks
Masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, 
and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.                      
                </div>
            </div>
        </div>    
           
    </div>
    );
  }
  export default All;
