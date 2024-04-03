import React from 'react'
import { Link } from "react-router-dom"
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../assets/images/carrusel1.png';
import carrusel2 from '../assets/images/carrusel2.png';
import carrusel3 from '../assets/images/carrusel3.png';


export const Home = () => {
  return (
    <main>
      <Header/>
      <br /><br />
      <h1>Bienvenidos a Kodigo Music</h1>
      <Carousel>
      <Carousel.Item>
        <img
          src={carrusel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Artistas</h5>
          <p>Escucha tus artistas favoritos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={carrusel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Novedades</h5>
          <p>Escucha los nuevos lanzamientos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={carrusel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Canciones</h5>
          <p>Disfruta de tu musica favorita
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Footer/>
    </main>
    
  )
}




