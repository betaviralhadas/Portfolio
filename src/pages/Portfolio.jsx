import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Cards from "../components/Cards";
import Form from "../components/Form";
import '../style/Page/_Portfolio.scss';
import Modal from "../containers/Modal";


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
                <Modal 
                content={
                    <div>
                        <h3>messagem enviada</h3>
                        
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
