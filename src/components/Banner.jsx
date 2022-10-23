import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Banner({Projects}) {
    function truncateText(string, number) {
        return string.substr(0, number - 1) + "...";
    }

    const bannerStyle = {
        backgroundImage:`url(./images/thumbnail/${Projects[2].image})`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
    }
    return (
        <header className='banner' style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">{Projects[2].name}</h1>
                <p className="banner__description">{truncateText(Projects[2].description,150)}</p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play"><FaInfoCircle className='banner__button__icon' /> Plus d'info</button>
                    <button className="banner__button banner__button__github"><FaGithub className='banner__button__icon' />Github</button>
                </div>
            </div>
        </header>
    )
}

export default Banner