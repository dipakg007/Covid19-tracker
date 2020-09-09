import React from "react";
import "./symt.css";
import "./Imge";
import All from "./All";
import Prevention from "./Prevention";
import Link from "./Link";
import Treatments from "./Treatments";


const heading = {
      backgroundColor: '#80ffd4', 
      padding: '5%', 
      textAlign: 'center', 
    };

function Symtoms() {
  
  return (
        <>
            <div className="main_sy">
              <div className="main_sy1">
                <All />
                <Prevention />
              </div>
              <Treatments />
              <Link />
            </div>
           
            
          </>
  );
}

export default Symtoms;
