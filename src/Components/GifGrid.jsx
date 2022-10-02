import { useState } from "react";
import { useEffect } from "react";
import GifItem from "./GifItem";
import { getGifs } from "./helpers/getGifs";

const GifGrid = ({ category }) => {
  //Recordar el useState es se pone entre corchetes
  const [imagenes, setImagenes] = useState([]);

  const getImages = async() => {
    const newImages =  await getGifs(category);
    setImagenes(newImages);
  }
 

useEffect(() => {
    getImages();
    // eslint-disable-next-line 
  }, [])
  return (
    <>
      <h3>{category}</h3>
<div className="card-grid">
   {/* Desplegar listado*/}
   {
        imagenes.map(imagen => <GifItem key={imagen.id} {...imagen}  />)
      }
</div>
     
    </>
  );
};
export default GifGrid;
