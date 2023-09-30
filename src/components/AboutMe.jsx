import React from "react";
import photoAboutMe from "../Img/beta.jpg";
import '../style/Components/_AboutMe.scss';
import Collapse from "./Collapse";

const AboutMe = () => {
    return (
        <section id="about_me">
            <Collapse
                title={<h2>About me</h2>}
                description={<div className="content_about">
                    <div className="text_about">
                        <p>Hello! I'm Elisabete, an aspiring web developer taking the first steps on the exciting journey of digital development.</p>
                        <p>My initial experience focuses on school projects where I had the opportunity to learn and apply the fundamentals of web development, including HTML, CSS and JavaScript. These projects have allowed me to build a solid foundation of essential knowledge and skills.</p>
                        <p>I recently transitioned my career into web development, a step that demonstrates my determination. Although my journey is just the beginning, I am committed to continually learning, improving my skills, and collaborating with other professionals who are passionate about technology.
                            I'm looking forward to facing new challenges and expanding my experience in web development.</p>
                        <p>Languages I speak: Portuguese and French</p>
                    </div>
                    <button className="cv_button">See the CV</button>
                    <img
                        className="photo_about"
                        src={photoAboutMe}
                        alt="elisabete"
                    />
                </div>
                } />
        </section>
    )
}
export default AboutMe;