import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

function QuickView({ Props, popup, toggle, popupStatus }) {

    const modalState = popup;
    const close = toggle

    const quickViewStyle = {
        backgroundImage: `url(./images/${Props.screenshoot})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }

    return (
        <div className={`quickView ${popupStatus && "quickView--open"}`}>
            <div className='quickView__banner' style={quickViewStyle}>
                <div className="quickView__content">
                    <h3 className="quickView__title">{Props.name}</h3>
                    <p>{Props.description}</p>
                </div>
                <button className='quickView__close' onClick={close}><FaRegTimesCircle /></button>
            </div>
        </div >
    )
}

export default QuickView