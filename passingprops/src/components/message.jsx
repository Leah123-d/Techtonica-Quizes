function Message({ email }) {
   //DO NOT DELETE: from the parent component the prop email is set
   //from a function passed from another child 
   //this function will use that prop to display a thank you message. 
  return (
    <div>
      {!email ? null : <p> Thank you for submiting your email: {email} </p>}
    </div>
  );
}

export default Message;
