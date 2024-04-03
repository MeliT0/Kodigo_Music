import React from 'react'
import { Link } from "react-router-dom"
import { collection, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Footer } from '../components/Footer'
import { Header } from '../components/Header.jsx';



export const ListadoCanciones = () => {

  const [listaCanciones, agregarCancion] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'listaCanciones'), (snapshot) => {
      agregarCancion(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <Container>
      <Header/>
      <ListGroup numbered>
        {listaCanciones.map(cancion =>
          <ListGroup.Item>
            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
             <h5>{cancion.Nombre}</h5> 
            </label>
            <Link to='/editarCancion'>
              <Button variant="outline-dark"  size="sm" as="input" type="button" value="Editar" />
            </Link>
          </ListGroup.Item>
        )}
      </ListGroup>
      <br></br>
      <Link to='/'> <Button variant="outline-dark" as="input" type="button" value="Home" /></Link>
      <Footer/>
    </Container>
   
  )
}