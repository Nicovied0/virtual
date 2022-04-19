import React from 'react'

const Info = (props) => {
  return (
    <div className='Info'>
        <p className='info-nombre' >{props.titulo}</p>
        <img className='info-img' src={require(`../assets/img/img-info-${props.imagen}.png`)}/>
        <p className='info-info'>{props.info}</p>
    
    </div>
  )
}

export default Info