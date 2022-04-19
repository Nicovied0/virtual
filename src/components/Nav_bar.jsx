import React from 'react'
import './styles/index.css';
import profile from '../assets/img/person-fill.svg'
import trolley from '../assets/img/trolley.svg'

const Nav_bar = () => {
  return (
    <div className='container_principal'>
      <header className='header'>
        <nav className='nav_bar'>
          <div className='div_header2'>
            <a className='nombre' id='inicio'>TIENDA VIRTUAL</a>
          </div>
          <div className='div_header2'>
            <img src={profile} className="profile" />
            <img src={trolley} className="trolley" />
          </div>
        </nav>
        
        <div className='div_header'>
            <a className='lista'>Productos</a>
            <a className='lista'>Contacto</a>
          </div>
      </header>
    </div>
  )
}

export default Nav_bar