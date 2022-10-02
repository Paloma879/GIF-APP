import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  return (
    <>
      {/*Titulo */}
      <h1> Gif App </h1>

      {/*Input */}
      <AddCategory addCategory={handleAddCategory} />
      {/*Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifApp;
