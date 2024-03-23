import React from 'react'
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../firebase/config.js';
import { useState } from "react";



export const ListadoCanciones = () => {

  const [listaCanciones, agregarCancion] = useState([]);

const querySnapshot = getDocs(collection(db, "listaCanciones"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().Nombre}`);
});

  return (
    <div>
      <h1>Listado de canciones</h1>
      <Link to='/editarCancion' className= "btn btn-secondary"> Editar cancion</Link><br />
      <Link to='/' className= "btn btn-secondary"> Home</Link>


    </div>
  )
}