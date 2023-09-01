import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Cards from "../components/Cards";
import Form from "../components/Form";
import '../style/Page/_Portfolio.scss';


const Portfolio = () => {
    return(
        <>
            {<Banner />}
            <main>
                {<AboutMe />}
                {<Skills />}
                <section id="projects">
                    <h2>Projects</h2>
                    {<Cards />}
                </section>
                {<Form />}
            </main>
        </>
    )
}
export default Portfolio;
