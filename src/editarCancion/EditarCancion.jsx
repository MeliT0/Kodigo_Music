import React from 'react'
import { Link } from "react-router-dom"

export const EditarCancion = () => {
  return (
    <div>
      <h1>Editar cancion</h1>
      <Link to='/listadoCanciones' className= "btn btn-secondary"> Guardar</Link><br />
      <Link to='/' className= "btn btn-secondary"> Home</Link>

    </div>
  )
}