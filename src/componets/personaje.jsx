import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";

const Personaje = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("No se recibió un ID válido");
      return;
    }

    const fetchData = async () => {
      try {
        console.log("ID recibido:", id);
        console.log(`Consultando: https://rickandmortyapi.com/api/character/${id}`);

        await unicoPersonaje(id, setPersonaje);
        setError(null); // si todo salió bien, limpiamos error
      } catch (err) {
        console.error("Error al traer personaje:", err);
        setError("No se encontró el personaje o hubo un error en la API.");
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Detalle del Personaje</h2>
      <p>ID recibido: {id || "No se recibió ID"}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {personaje ? (
        <div>
          <h1>{personaje.name}</h1>
          <img src={personaje.image} alt={personaje.name} />
          <p>Status: {personaje.status}</p>
          <p>Especie: {personaje.species}</p>
        </div>
      ) : !error ? (
        <p>Cargando personaje...</p>
      ) : null}
    </div>
  );
};

export default Personaje;
