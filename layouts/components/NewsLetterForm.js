import React, { useState } from "react";

function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    resetForm();
  };

  return (
    <>
        <a href="/categories" className="d-block  btn btn-primary mt-4 w-full">
          En savoir plus ! 
        </a>
    </>    
  );
}

export default CustomForm;
