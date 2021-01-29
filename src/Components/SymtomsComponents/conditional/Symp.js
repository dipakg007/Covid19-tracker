import React from "react";
import "../Switch.css";
import Fever from "./sick.png";
import Cough from "./cough.png";
import Tired from "./tired.png";

function Symp() {
  return (
    <div>
      <div className="symp__image symp__comp">
        <img src={Fever} className="s__image"></img>
        <img src={Cough} className="s__image"></img>
        <img src={Tired} className="s__image"></img>
      </div>
      <div className="symp__comp">
        <p>
          COVID-19 affects different people in different ways. Most infected
          people will develop mild to moderate illness and recover without
          hospitalization.
        </p>
      </div>
      <div className="symp__comp">
        <p>Most common symptoms:</p>
        <ul>
          <li>Fever</li>
          <li>Dry Cough</li>
          <li>Tiredness</li>
        </ul>
      </div>
      <div className="symp__comp">
        <p>Less common symptoms:</p>
        <ul>
          <li>aches and pains</li>
          <li>sore throat</li>
          <li>diarrhoea</li>
          <li>conjunctivitis</li>
          <li>headache</li>
          <li>loss of taste or smell</li>
          <li>a rash on skin, or discolouration of fingers or toes</li>
        </ul>
      </div>
      <div className="symp__comp">
        <p>Serious symptoms:</p>
        <ul>
          <li>difficulty breathing or shortness of breath</li>
          <li>chest pain or pressure</li>
          <li>loss of speech or movement</li>
        </ul>
      </div>
      <div className="symp__comp">
        <p>
          Seek immediate medical attention if you have serious symptoms. Always
          call before visiting your doctor or health facility.
        </p>
      </div>
      <div className="symp__comp">
        <p>
          People with mild symptoms who are otherwise healthy should manage
          their symptoms at home.
        </p>
      </div>
      <div className="symp__comp">
        <p>
          On average it takes 5–6 days from when someone is infected with the
          virus for symptoms to show, however it can take up to 14 days.
        </p>
      </div>
    </div>
  );
}

export default Symp;
