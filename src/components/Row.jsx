import React from 'react'
import { useState } from 'react';
import QuickView from './QuickView'

function Rows({ title, Props, id }) {

  const [popup, setPopup] = useState(false);
  const [card, setCard] = useState({});

  let rowSkills

  if (title === "Compétences") {
    rowSkills = title
  }

  function toggleModal() {
    setPopup(!popup)
  }

  const handleClickPopup = (card) => {
    setCard(card)
    setPopup(true)
  }

  return (
    rowSkills ?
      <section className='row' id={id}>
        <h2 className='row__title'>{title}</h2>
        <div className='row__images'>
          {Props.map((prop) =>
            <article className='row__card' key={prop.id}>
              <img src={(`./images/${prop.image}`)} alt={prop.name} className='row__image' />
              <h4 className='row__image__name'>{prop.name}</h4>
            </article>
          )}
        </div>
      </section>
      :
      <section className='row' id={id}>
        <h2 className='row__title'>{title}</h2>
        <div className='row__images'>
          {Props.map((prop) =>
            <article className='row__card' key={prop.id}>
              <img src={(`./images/${prop.image}`)} alt={prop.name} className='row__image' onClick={() => handleClickPopup(prop)} />
              <h4 className='row__image__name'>{prop.name}</h4>
            </article>
          )}
        </div>
        {popup ? <QuickView Props={card} popup={popup} toggle={toggleModal} popupStatus={popup} /> : null}
      </section>
  )
}

export default Rows