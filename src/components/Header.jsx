import React, { useState } from "react";
import profilePhoto from "../Img/beta.webp";
import '../style/Components/_Header.scss';

const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => { //para fechar menu ao clicar no item
        setMobileMenuOpen(false);
      };

    return (
        <section className="header">
            <div className="name_photo">
                <img
                    className="profile_photo"
                    src={profilePhoto}
                    alt="elisabeteViralhadas"
                />
                <h1>Elisabete Viralhadas</h1>
            </div>
            <nav className={`navigation ${isMobileMenuOpen ? '' : ''}`}>
                {window.innerWidth <= 767 && (
                    <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-bars bars"></i>
                    </div>
                )}
                {window.innerWidth <= 767 && isMobileMenuOpen && (
                    <ul className={`nav_ul ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li><a href="#about_me" title="about" onClick={closeMobileMenu}>About</a></li>
                        <li><a href="#skills" title="skills" onClick={closeMobileMenu}>Skills</a></li>
                        <li><a href="#projects" title="projects" onClick={closeMobileMenu}>Projects</a></li>
                        <li><a href="#contact" title="contact" onClick={closeMobileMenu}>Contact</a></li>
                    </ul>
                )}

                {window.innerWidth > 767 && !isMobileMenuOpen && (
                    <ul className={`nav_ul ${isMobileMenuOpen ? '' : ''}`}>
                        <li><a href="#about_me" title="about">About</a></li>
                        <li><a href="#skills" title="skills">Skills</a></li>
                        <li><a href="#projects" title="projects">Projects</a></li>
                        <li><a href="#contact" title="contact">Contact</a></li>
                    </ul>
                )}
            </nav>
        </section>
    )
}
export default Header;