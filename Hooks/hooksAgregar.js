import React, { useState } from "react";
export const hooksAgregar = (category = "")=>{
    const [agregar, setAgregar] = useState(category);
    const handlechange = ({ target }) => {
      const { value } = target;
      setAgregar(value);
    };

    return {
        agregar, 
        setAgregar,
        handlechange
    }
}