import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Form from "../components/Form";
import '../style/Page/_Portfolio.scss';
import FormModal from "../containers/FormModal";
import Slider from "../components/Slider";

const Portfolio = () => {
    return (
        <>
            <section id="top">
                {<Banner />}
            </section>
            <main>
                {<AboutMe />}
                <section id="skills">
                    <h2 className='skills_title'>Skills</h2>
                    {<Slider />}
                </section>
                
                <section id="projects">
                    <h2 className="title_projects">Projects</h2>
                    {<Cards />}
                </section>
                <FormModal
                    content={
                        <section className="message_sent">
                            <h3>Message sent</h3>
                            <i class="fa-regular fa-circle-check"></i>
                        </section>
                    }>
                    {({ setisOpened }) => (
                        <Form onSuccess={() => setisOpened(true)} />)}
                </FormModal>
            </main>
        </>
    )
}
export default Portfolio;