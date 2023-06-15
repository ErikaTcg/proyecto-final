import React  from 'react'

import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
import Inicio from './paginas/Inicio'
import Error from './paginas/Error'
import PanelControl from './paginas/PanelControl'

import { Routes, Route} from 'react-router-dom';

export const App = ()=> {

  return (
    <>
    <Nav/>
      <Routes>
        <Route path = "/" element = {<Inicio/>}/>
        <Route path = "/PanelControl" element = {<PanelControl/>}/>
        <Route path = "*" element = {<Error/>}/>
      </Routes>
    <Footer/>
    </>
  )
}
