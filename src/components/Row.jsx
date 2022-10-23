import React from 'react'

function Rows({ title, Props }) {
  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        {Props.map((prop) =>
          <img src={(`./images/${prop.image}`)} alt={prop.name} className='row__image' key={prop.id} />
        )}
      </div>
    </div>
  )
}

export default Rows