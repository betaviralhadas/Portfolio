import React from "react";
import "../style/Components/_Footer.scss";

const Footer = () => {
    return(
        <div className="content_footer">
            <button className="top_button">
                <a href="#top" title="top"><i className="fa-solid fa-angle-up"></i></a>
            </button>
            <article className="footer_links">
                <a href="https://github.com/betaviralhadas" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/elisabete-viralhadas-3a387224b" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </article>
            <article className="footer_text">
                <i className="fa-regular fa-copyright"></i>
                <p>Copyright 2023. Made by Elisabete Viralhadas</p>
            </article>   
        </div>
    )
}
export default Footer;