import React from 'react'
import { useState } from 'react';
import QuickView from './QuickView'

function Rows({ title, Props, id }) {

  const [popup, setPopup] = useState(false);
  const [card, setCard] = useState({});

  let testskill

  if (title === "Compétences") {
    testskill = title
  }

  function toggleModal() {
    setPopup(!popup)
  }

  const handleClickPopup = (card) => {
    setCard(card)
    setPopup(true)
  }

  return (
    testskill ?
      <div className='row' id={id}>
        <h2 className='row__title'>{title}</h2>
        <div className='row__images'>
          {Props.map((prop) =>
            <img src={(`./images/${prop.image}`)} alt={prop.name} className='row__image' key={prop.id} />
          )}
        </div>
      </div>
      :
      <div className='row' id={id}>
        <h2 className='row__title'>{title}</h2>
        <div className='row__images'>
          {Props.map((prop) =>
            <img src={(`./images/${prop.image}`)} alt={prop.name} className='row__image' onClick={() => handleClickPopup(prop)} key={prop.id} />
          )}
        </div>
        {popup ? <QuickView Props={card} popup={popup} toggle={toggleModal} popupStatus={popup} /> : null}
      </div>
  )
}

export default Rows