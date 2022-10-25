import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function QuickView({ Props, toggle, popupStatus }) {
    const close = toggle

    const quickViewStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${Props.screenshoot})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }

    return (
        <div className={`quickView ${popupStatus && "quickView--open"}`}>
            <div className='quickView__banner' style={quickViewStyle}>
                <div className="quickView__content">
                    <h3 className="quickView__title">{Props.name}</h3>
                    <p>{Props.description}</p>
                    {Props.site ?
                        <div className="banner__buttons">
                            <a href={Props.site} rel='noreferrer' target="_blank">
                                <button className="banner__button banner__button--play"><FaExternalLinkAlt className='banner__button__icon' />Voir le Projet</button>
                            </a>
                            <a href={Props.github} rel='noreferrer' target="_blank">
                                <button className="banner__button"> <FaGithub className='banner__button__icon' />Github</button>
                            </a>
                        </div>
                        :
                        <div className="banner__buttons">
                            <a href={Props.github} rel='noreferrer' target="_blank">
                                <button className="banner__button"> <FaGithub className='banner__button__icon' />Github</button>
                            </a>
                        </div>
                    }
                </div>
                <button className='quickView__close' onClick={close}><FaRegTimesCircle /></button>
            </div>
        </div >
    )
}

export default QuickView