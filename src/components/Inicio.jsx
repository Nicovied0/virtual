import React from 'react'
import './styles/Nav_Bar.css';
import auris from '../assets/img/auris.png'

const Inicio = () => {
  return (
    <div className='div_contenedor'>
             <div className='div_contendor_hijo'>
                 <img src={auris} className='img_auris'/>
                 <h1 className='h1_titulo'>TIENDA VIRTUAL</h1>
                 <p className='parrafo_titulo'>Auriculares externos inalámbricos con cancelación de ruido EXTRA BASS ™ con micrófono.</p>
             </div>
         </div>
  )
}

export default Inicio