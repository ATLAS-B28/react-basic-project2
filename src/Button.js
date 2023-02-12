import React from "react";

function Button({ buttonText, reqType, setReqType }) {
  return (
    <button
      type="button"
      //set the class name equal to the button text
      //and set it as the new value of the state
      //using a ternery operator to check whether there is a selected reqTyep or not
      className={buttonText === reqType ? "selected" : null}
      onClick={() => setReqType(buttonText)} 
      //to call a function with its param we use an anonymous func to call it
    >
      {buttonText}
    </button>
  );
}

export default Button;
