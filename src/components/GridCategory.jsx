//import React, { useEffect, useState } from "react";
import { hookApiMostrar } from "../../Hooks/hooksApiMostrar";
//import { gifsApi } from "../../Hooks/gift";
import GridItem from "./GridItem";

const GridCategory = ({ categoria }) => {
  const {gift, loading} =hookApiMostrar(categoria)
  //const [gift, setGift] = useState([]);
  // const getGift = async()=>{
  //     const url = `https://api.giphy.com/v1/gifs/search?api_key=IDA6e6QaO0g3yJqFRMnOYGSWZN3MGYcl&q=${categoria}`
  //     const resp = await fetch(url)
  //     const {data} = await resp.json()
  //     const nuevoArr = data.map((dato)=>(
  //         {
  //             id:dato.id,
  //             title:dato.title,
  //             img:dato.images.original.url
  //         }
  //     ))
  //     console.log(nuevoArr)
  //     setGift(nuevoArr)
  // }
  /*const obtenerApi = async () => {
    const data = await gifsApi(categoria);
    setGift(data);
  };*/

  /*useEffect(() => {
    obtenerApi();
  }, []);*/

  return (
    <>
      <h3>{categoria}</h3>
      {loading && (<h2>Loading......</h2>)}
      <div className="card-grid">
        {
          gift.map(info=>(
            <GridItem 
            key={info.id} 
            //title={info.title} 
            //img={info.img}
            {...info}
            />
          ))
        }
      </div>
    </>
  );
};

export default GridCategory;
