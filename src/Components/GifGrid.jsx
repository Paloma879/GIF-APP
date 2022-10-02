const GifGrid = ({ category }) => {
  //Recordar el useState es se pone entre corchetes

  const getGifs = async () => {
    const API_KEY = "6opHtBFaDs3uhQ1Z2qgPTTYWRPWBKO8a";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&rating=g&lang=en`;

    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.original
    }))

    console.log(gifs);
  };

  getGifs();
  return (
    <>
      <h3>{category}</h3>

      {/* Desplegar listado*/}
    </>
  );
};
export default GifGrid;
