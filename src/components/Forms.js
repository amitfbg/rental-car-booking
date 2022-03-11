import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function renderSingleForm(state, setActive) {
  switch (state) {
    case 1:
      return <Step1 setActive={setActive} />;
    case 2:
      return <Step2 setActive={setActive} />;
    case 3:
      return <Step3 setActive={setActive} />;
    case 4:
      return <Step4 setActive={setActive} />;
    default:
      return <Step1 setActive={setActive} />;
  }
}

function Forms() {
  let [activeForm, setActiveForm] = useState(0);

  return <div>{renderSingleForm(activeForm, setActiveForm)}</div>;
}

export default Forms;
