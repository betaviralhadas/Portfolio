import React from "react";
import profilePhoto from "../Img/beta.jpg";
import '../style/Components/_Header.scss';

const Header = () => {
    return (
        <section id="top">
            <div className="name_photo">
                <img
                    className="profile_photo"
                    src={profilePhoto}
                    alt="elisabete"
                />
                <h1>Elisabete Viralhadas</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#about_me" title="about">About</a></li>
                    <li><a href="#skills" title="skills">Skills</a></li>
                    <li><a href="#projects" title="projects">Projects</a></li>
                    <li><a href="#contact" title="contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}
export default Header;