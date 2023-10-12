import React, { useState } from "react";
import profilePhoto from "../Img/beta.jpg";
import '../style/Components/_Header.scss';

const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
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
            <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {window.innerWidth <= 767 && ( // Verifique se a largura da tela é menor ou igual a 767 pixels
                    <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-bars bars"></i>
                    </div>

                )}
                {window.innerWidth <= 767 && isMobileMenuOpen && ( // Verifique se a largura da tela é menor ou igual a 767 pixels e o menu móvel está aberto
                    <ul className={`nav_ul ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li><a href="#about_me" title="about">About</a></li>
                        <li><a href="#skills" title="skills">Skills</a></li>
                        <li><a href="#projects" title="projects">Projects</a></li>
                        <li><a href="#contact" title="contact">Contact</a></li>
                    </ul>
                )}

                {window.innerWidth > 767 && !isMobileMenuOpen && ( 
                    <ul className={`nav_ul ${isMobileMenuOpen ? '' : 'mobile-open'}`}>
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