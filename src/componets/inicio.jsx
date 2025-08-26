import React, { useEffect, useState } from 'react';
import { todoPersonajes } from '../funciones/funciones';
import { Link } from "react-router-dom";


const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todoPersonajes(setPersonajes);
  }, []);

  return (
    <>
      
{personajes !== null ? (
  personajes.map((personaje) => (
    <div key={personaje.id}>
      <Link to={`/personaje/${personaje.id}`}>
        {personaje.name}
      </Link>
      <img src={personaje.image} alt={personaje.name} />
    </div>
  ))
) : (
  <p>No hay personajes</p>
)}
    </>
  );
};

export default Inicio;
