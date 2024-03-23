import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./home/Home";
import { ListadoCanciones } from "./listadoCanciones/ListadoCanciones";
import { EditarCancion } from "./editarCancion/EditarCancion";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route index path='/' element= {<Home/>}/>
    <Route path='/listadoCanciones' element= {<ListadoCanciones/>}/>
    <Route path='/editarCancion' element= {<EditarCancion/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
