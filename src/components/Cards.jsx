import React from "react";

import data from '../components/Data.json';
import Modal from '../containers/Modal';
import ContentModal from "../containers/ContentModal";
import '../style/Components/_Cards.scss';

const Cards = () => {
    return (
        <section className="cards">
             <div>
                {data.map((project) => (
                    <Modal key={project.id} content={<ContentModal project={project} />}>
                        {({setisOpened}) => (
                            <div className="card" key={project.id} onClick={() => setisOpened(true)}>
                            <img
                                className="card_img"
                                src={project.coverImage}
                                alt="logo"
                            />
                            <h3>{project.title}</h3>
                        </div>
                        )}
                    
                    </Modal>
                ))}
            </div>
            
        </section>
    )
}
export default Cards;