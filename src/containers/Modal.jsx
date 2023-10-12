import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import '../style/containers/_ContentModal.scss';
import { click } from "@testing-library/user-event/dist/click";

const Modal = ({ opened, content, children }) => {
    const [isOpened, setisOpened] = useState(opened);

    const closeModal = () => {
        setisOpened(false);
    };

    return (
        <>
            {children({ isOpened, setisOpened })}
            {
                isOpened && (
                    //  <div className="modal-overlay" onClick={closeModal}>
                    
                        <div id="modal_window" className="modal_window">
                            <button className="close_modal" onClick={closeModal}>X</button>
                            {content}
                        </div>
                
                )
            }
        </>
    );
}
Modal.defaultProps = { opened: false };
Modal.PropType = {
    opened: PropType.bool,
    content: PropType.node.isRequired,
    children: PropType.func.isRequired
}
export default Modal;
