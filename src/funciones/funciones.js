import axios from "axios";

const todoPersonajes = async(state) => {
    const peticion =  await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

const unicoPersonaje = async (id, state) => {
    const peticion =  await axios.get('https://rickandmortyapi.com/api/character' + {id})
    state(peticion)
}

export {
    todoPersonajes,
    unicoPersonaje
}