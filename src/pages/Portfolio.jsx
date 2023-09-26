import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";

import Cards from "../components/Cards";
import Form from "../components/Form";
import '../style/Page/_Portfolio.scss';
import Modal from "../containers/Modal";
import Slider from "../components/Slider";


const Portfolio = () => {
    return(
        <>
            {<Banner />}
            <main>
                {<AboutMe />}
                <section id="skills">
                    {<Slider />}
                </section>
                <section id="projects">
                    <h2 className="title_projects">Projects</h2>
                    {<Cards />}
                </section>
                <Modal 
                content={
                    <div>
                        <h3>Message sent</h3>
                    </div>
                }>
                    {({ setisOpened }) => (
                    <Form onSuccess={()=> setisOpened(true)} />)}
                </Modal>
            </main>
        </>
    )
}
export default Portfolio;