import React from 'react'

const Card = ({userName,generMusic}) => {
  return (
    <div className='container-card'>
        <div className='style-card'>
            <h1 className='style-title'>Tu datos ingresados son: </h1>
            <h3> Nombre: {userName} </h3>
            <h3> Genero musical favorito: {generMusic} </h3>
        </div>
    </div>
  )
}

export default Card