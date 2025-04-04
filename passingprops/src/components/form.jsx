import { useState } from "react";

function Form({ onSendData }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //DO NOT DELETE: the prop onSendData is a call back function
  //for the child to send data back to the parent component. 
  //when the user enters their email address it will saved to the function 
  //then in the parent component it can use that data. 

  const handleSendData = () => {
    onSendData(inputValue);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Please enter your email"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default Form;
