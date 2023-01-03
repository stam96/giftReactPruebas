import { useEffect, useState } from "react";
import { gifsApi } from "./gift";

export const hookApiMostrar = (categoria, arreglo=[])=>{
    const [gift, setGift] = useState(arreglo);
    const [loading, setLoading] = useState(true)
    const obtenerApi = async () => {
        const data = await gifsApi(categoria);
        setGift(data);
        setLoading(false)
      };

      useEffect(() => {
        obtenerApi();
      }, []);
    
    return {
        gift,
        loading
    }
}