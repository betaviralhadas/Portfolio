import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import '../style/containers/_ContentModal.scss';
import { click } from "@testing-library/user-event/dist/click";

const Modal = ({ opened, content, children }) => {
    const [isOpened, setisOpened] = useState(opened);
    useEffect(() => {
        setisOpened(opened)
    }, [opened])


    const closed = () => {
        document.querySelector("#modal_window").style.display="none";
        setisOpened(false)
    }

    const modal = document.querySelector("#modal_window")
    window.addEventListener("keydown",(e) => {
        
        if(e.key=== "esc") {
            closed()
        }
    })
    return (
        <>
            {children({ isOpened, setisOpened })}
            {
                isOpened && (

                    <div id="modal_window" className="modal_window">
                        <button className="close_modal" onClick={() => closed()}>X</button>
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
