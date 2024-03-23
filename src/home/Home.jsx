import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a Kodigo Music</h1>
      <Link to='/listadoCanciones' className= "btn btn-secondary"> Listado de Canciones</Link>
    </div>
  )
}




