import React, { useState } from 'react'
import { FaInfoCircle, FaGithub } from 'react-icons/fa'
import QuickView from './QuickView';

function Banner({ Projects }) {
    const [popup, setPopup] = useState(false);

    function handleClickPopup() {
        popup ? setPopup() : setPopup(true);
    }

    function truncateText(string, number) {
        return string.substr(0, number - 1) + "...";
    }

    const bannerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${Projects[2].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }

    function toggleModal() {
        setPopup(!popup)
    }

    return (
        <header className='banner' style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">{Projects[2].name}</h1>
                <p className="banner__description">{truncateText(Projects[2].description, 150)}</p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play" onClick={handleClickPopup}><FaInfoCircle className='banner__button__icon' /> Plus d'info</button>
                    <a href={Projects[2].github} rel='noreferrer' target="_blank">
                        <button className="banner__button banner__button__github"> <FaGithub className='banner__button__icon' />Github</button>
                    </a>
                </div>
            </div>
            {popup ? <QuickView Props={Projects[2]} popup={handleClickPopup} toggle={toggleModal} popupStatus={popup} /> : null}
        </header>
    )
}

export default Banner