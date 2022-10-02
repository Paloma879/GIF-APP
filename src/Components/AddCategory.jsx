import React from "react";
import { useState } from "react";

const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;

    addCategory(inputValue.trim());
    setInputValue("");

    /*El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.)  */
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
