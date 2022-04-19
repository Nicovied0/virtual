import React from 'react'
import './styles/App.css';

const Productos = (props) => {
  return (
    <div >
            <div className="productos">
                <h3 className='productos-nombre'>{props.nombre}</h3> 
                <img className='productos-imagen' src={require(`../assets/img/img-${props.imagen}.png`)}/>   
                <p className='productos-texto'>{props.detalles}</p>
            </div>
        </div>
  )
}

export default Productos