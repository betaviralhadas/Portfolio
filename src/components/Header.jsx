import React, {useRef} from "react";
import {FaBars} from "react-icons";
import profilePhoto from "../Img/beta.jpg";
import '../style/Components/_Header.scss';

const Header = () => {

   const icon = useRef()

    return (
        <section id="top">
            <div className="name_photo">
                <img
                    className="profile_photo"
                    src={profilePhoto}
                    alt="elisabeteViralhadas"
                />
                <h1>Elisabete Viralhadas</h1>
            </div>
            <nav className="navigation">
                
            <i class="fa-solid fa-bars bars"></i><ul className="nav_ul">
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