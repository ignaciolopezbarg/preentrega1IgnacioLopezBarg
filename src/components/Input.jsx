import React from "react";

function Input({ id, text, placeholder = "Escriba un valor...", type }) {
  return (
    <div className="flex flex-col my-2 gap-2">
      <label htmlFor= {id} > {text} </label>
      <input type={type} placeholder={placeholder}  />
    </div>
  );
}

export default Input;
