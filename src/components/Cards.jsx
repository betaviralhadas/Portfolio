import React from "react";
import imgBanner from "../Img/1.jpg";
import data from '../components/Data.json';
import '../style/Components/_Cards.scss';

const Cards = () => {
    return (
        <section className="cards">
            {
                data.map((project) => (
                    <div className="card" key={project.id}>
                        <img
                            className="card_img"
                            src={imgBanner}
                            alt="logo"
                        />
                        <h3>{project.title}</h3>
                    </div>
                ))
            }
        </section>
    )
}
export default Cards;