import React from 'react'
import { useState } from 'react'
import { FaBars ,FaGithub ,FaLinkedin} from 'react-icons/fa'

function Nav() {

    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }

    useState(() => {
        document.addEventListener("scroll", transitionNav)
    })
    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
            <button className='nav__burger' onClick={handleClick}><FaBars /></button>
            <img src="./images/logoNetflix.png" className='nav__logo' alt="logo" />
            <nav className='nav__links'>
                <a href="#Accueil" className="nav__link">
                    Accueil
                </a>
                <a href="#Compétences" className="nav__link">
                    Compétences
                </a>
                <a href="#Projets" className="nav__link">
                    Projets
                </a>
            </nav>
            <div className="nav__actions">
                <a href="https://www.linkedin.com/in/thomas-lefevre76/" rel='noreferrer' target="_blank" className="nav__action">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Thomas-Lefevre" rel='noreferrer' target="_blank" className="nav__action">
                    <FaGithub />
                </a>
            </div>
        </div >
    )
}

export default Nav