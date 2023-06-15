import React from 'react'
import { Link } from 'react-router-dom'
import './estilos/Nav.css'
import home from '../recursos/home.png'
import stats from '../recursos/stats.png'

const Nav = () => {

  return (
    <>
      <aside className='nav'>
        
        {/* INICIO */}
        <Link to={"/"} className='guia'>
          <div className='icono'>
            <img src={home} alt=""/>
          </div>
        </Link>

        {/* STATS */}
        <Link to={"/PanelControl"} className='guia'>
          <div className='icono'>
            <img src={stats} alt=""/>
          </div>
        </Link>
        
      </aside>

    </>
  )
}

export default Nav
