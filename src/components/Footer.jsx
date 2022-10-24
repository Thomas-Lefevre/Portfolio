import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer'>
            {/* <img src={`./images/projects/${Projects[5].image}`} alt="saispas" /> */}
            <div className='container'>
                <span className='footer__developer'>Développé par Thomas Lefevre</span>
                <div className="footer__socials">
                    <a href="https://github.com/Thomas-Lefevre" rel='noreferrer' target="_blank" className='footer__link leftLink'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/thomas-lefevre76/" rel='noreferrer' target="_blank" className='footer__link'><FaLinkedin /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer