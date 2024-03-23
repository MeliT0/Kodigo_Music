import React from 'react'
import { Link } from "react-router-dom"

export const ListadoCanciones = () => {
  return (
    <div>
      <h1>Listado de canciones</h1>
      <Link to='/editarCancion' className= "btn btn-secondary"> Editar cancion</Link><br />
      <Link to='/' className= "btn btn-secondary"> Home</Link>


    </div>
  )
}