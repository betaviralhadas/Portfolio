import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Cards from "../components/Cards";
import Form from "../components/Form";


const Portfolio = () => {
    return(
        <>
            {<Banner />}
            <main>
                {<AboutMe />}
                {<Skills />}
                <div id="projects">
                    <h3>Projects</h3>
                    <h4>Search</h4>
                    {<Cards />}
                </div>
                {<Form />}
            </main>
        </>
    )
}
export default Portfolio;
