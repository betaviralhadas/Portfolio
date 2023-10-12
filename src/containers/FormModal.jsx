import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import '../style/containers/_FormModal.scss';

const FormModal = ({ opened, content, children }) => {
    const [isOpened, setisOpened] = useState(opened);
    useEffect(() => {
        setisOpened(opened)
    }, [opened])

    return (
        <>
            {children({ isOpened, setisOpened })}
            {
                isOpened && (
                    <div>
                    <div className="modal_form">
                        <button className="close_modal" onClick={() => setisOpened(false)}>X</button>
                        {content}
                    </div>
                    </div>
                )
            }
        </>
    );
}
FormModal.defaultProps = { opened: false };
FormModal.PropType = {
    opened: PropType.bool,
    content: PropType.node.isRequired,
    children: PropType.func.isRequired
}
export default FormModal;
