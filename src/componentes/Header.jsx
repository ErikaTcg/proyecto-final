import React from 'react'
import './estilos/Header.css'


const Header = () => {

  return (
    <header className='banner'>
      <div className='slider'>
        <ul>
          <li><img src='src/recursos/hogar.jpg' alt="hogar"/></li>
          <li><img src='src/recursos/ropahombre.jpg' alt="hogar2"/></li>
          <li><img src='src/recursos/ropamujer.jpg' alt="mujer"/></li>
          <li><img src='src/recursos/hogar2.jpg' alt="mujer2"/></li>
          <li><img src='src/recursos/ropahombre2.jpg' alt="hombre"/></li>
          <li><img src='src/recursos/ropamujer2.jpg' alt="hombre2"/></li>
        </ul>
      </div>

      <div className='texto'>
        <h1>Tamara</h1>
      </div>
    </header>
  )
}

export default Header