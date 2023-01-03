import React, { useState } from "react";
import { hooksAgregar } from "../../Hooks/hooksAgregar";

const CategoriaAgregar = ({ recibirCategoria }) => {
  //const [agregar, setAgregar] = useState("");
  /*const handlechange = ({ target }) => {
    const { value } = target;
    setAgregar(value);
  };*/
  const {agregar, setAgregar, handlechange} = hooksAgregar();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    recibirCategoria(agregar);
    setAgregar("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={agregar}
        name="agregar"
        onChange={handlechange}
      />
    </form>
  );
};

export default CategoriaAgregar;
