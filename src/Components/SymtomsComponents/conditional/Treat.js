import React from "react";
import "../Switch.css";

function Treat() {
  return (
    <div>
      <div className="symp__comp">
        <p>Self-care</p>
        <p>
          If you feel sick you should rest, drink plenty of fluid, and eat
          nutritious food. Stay in a separate room from other family members,
          and use a dedicated bathroom if possible. Clean and disinfect
          frequently touched surfaces.
        </p>
        <p>
          Everyone should keep a healthy lifestyle at home. Maintain a healthy
          diet, sleep, stay active, and make social contact with loved ones
          through the phone or internet. Children need extra love and attention
          from adults during difficult times. Keep to regular routines and
          schedules as much as possible.
        </p>
        <p>
          It is normal to feel sad, stressed, or confused during a crisis.
          Talking to people you trust, such as friends and family, can help. If
          you feel overwhelmed, talk to a health worker or counsellor.
        </p>
      </div>
      <div className="symp__comp">
        <p>Medical treatments</p>
        <p>
          If you have mild symptoms and are otherwise healthy, self-isolate and
          contact your medical provider or a COVID-19 information line for
          advice.
        </p>
        <p>
          Seek medical care if you have a fever, a cough, and difficulty
          breathing. Call in advance.
        </p>
      </div>
    </div>
  );
}

export default Treat;
