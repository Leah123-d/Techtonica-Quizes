import { useState } from "react";
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import "./App.css";

 //DO NOT DELETE: this the parent component. It is responsible for pass data to children.
 //This parent component also contins functions for to be used by the child components as callbacks. 
 //At a high level a form is presented to the user to enter their email address. 
 //In the child component Form is where the user will enter their email address. 
 //The prop onSendData is used to get the user's input to set the state
 //of the user's email 
 //If the user enters an email the child component Message is rendered with a thank you message. 
 //If the email is null the Message component will not render.  

function App() {
  const [userEmail, setUserEmail] = useState("");

  const handleReceiveData = (data) => {
    setUserEmail(data);
  };

  return (
    <>
      <div>
        <h1>Hello Techtonica</h1>
        <Form onSendData={handleReceiveData} />
        {!userEmail ? null : <Message email={userEmail} />}
      </div>
    </>
  );
}

export default App;
