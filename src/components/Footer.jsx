import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <span className='footer__developer'>Développé par Thomas Lefevre</span>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/thomas-lefevre76/" rel='noreferrer' target="_blank" className='footer__link'><FaLinkedin /></a>
                    <a href="https://github.com/Thomas-Lefevre" rel='noreferrer' target="_blank" className='footer__link rightLink'><FaGithub /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer