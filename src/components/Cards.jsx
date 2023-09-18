import React from "react";

import data from '../components/Data.json';
import Modal from '../containers/Modal';
import ContentModal from "../containers/ContentModal";
import '../style/Components/_Cards.scss';

const Cards = () => {
    return (
        <section>
            <div className="cards">
                {data.map((project) => (
                    <Modal key={project.id} content={<ContentModal project={project} />}>
                        {({ setisOpened }) => (
                            <div className="card" key={project.id} onClick={() => setisOpened(true)}>
                                <img
                                    className="card_img"
                                    src={project.coverImage}
                                    alt="logo"
                                />
                                <div className="card_text">
                                    <h3 className="title">{project.title}</h3>
                                    <span className="hover_text">Project<i class="fa-solid fa-arrow-right-long"></i></span>
                                </div>
                            </div>
                        )}
                    </Modal>
                ))}
            </div>
        </section>
    )
}
export default Cards;