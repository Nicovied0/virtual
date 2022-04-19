import React from 'react'

const Form = () => {
  return (
    <form className='form'>
        <p className='form_contact'>Contáctanos</p>
        <div className='form_div'>
            <input className="form_input " type="text" placeholder='Nombre' ></input>
        </div>
        <div className='form_div'>
            <input className="form_input " type="mail" placeholder='Email' ></input>
        </div>
        <div className='form_div'>
            <input className="form_input" type="text" placeholder='Mensaje' ></input>
        </div>
        <div>
            <button className='form_button'>Enviar mensaje</button>
        </div>
    </form>
  )
}

export default Form