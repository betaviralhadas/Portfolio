import React from "react";
import photoAboutMe from "../Img/beta.jpg";
import '../style/Components/_AboutMe.scss';

const AboutMe = () => {
    return (
        <section id="about_me">
            <img
                className="photo_about"
                src={photoAboutMe}
                alt="elisabete"
            />
            <div className="content_about">
                <h2>About me</h2>
                <p className="text_about">sobre mim</p>
                <p>linguas faladas</p>
                <button>CV</button>
            </div>
        </section>
    )
}
export default AboutMe;