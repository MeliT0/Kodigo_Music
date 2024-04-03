import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const EditarCancion = () => {
  return (
    <Container>
      <Header/>
      <h1>Editar cancion</h1>
      <Form>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Escribe el nombre de la cancion" required  />
        <Form.Control.Feedback type="invalid">
        Por favor ingrese nombre de la cancion
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicArtist">
        <Form.Label>Artista</Form.Label>
        <Form.Control type="text" placeholder="Escribe su artista" required  />
        <Form.Control.Feedback type="invalid">
        Por favor ingrese el nombre del artista
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicGener">
        <Form.Label>Genero</Form.Label>
        <Form.Control type="text" placeholder="Escribe el genero de la cancion"  required />
        <Form.Control.Feedback type="invalid">
        Por favor ingrese genero de la cancion
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicDate">
        <Form.Label>Fecha de Lanzamiento</Form.Label>
        <Form.Control type="text" placeholder="Escribe la fecha de lanzamiento" required />
        <Form.Control.Feedback type="invalid">
        Por favor ingrese fecha de lanzamiento de la cancion
      </Form.Control.Feedback>
      </Form.Group>

      <Link to='/listadoCanciones'>
              <Button variant="outline-dark" size="lg" as="input" type="submit" value="Guardar" />
            </Link>
    </Form>
    
      
     
      <Footer/>
      </Container>
  )
}