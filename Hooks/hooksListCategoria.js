import { useState } from "react";
export const hookListCategory = (category ="")=>{
    const [categorias, setCategorias] = useState([category]);
    const recibirCategoria = (categoria) => {
        if(!categorias.includes(categoria)){
            return setCategorias([...categorias, categoria]);
        }
      };

      return {
        categorias,
        recibirCategoria
      }
}