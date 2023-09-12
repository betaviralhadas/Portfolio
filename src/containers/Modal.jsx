import React, {useState, useEffect} from "react";
import PropType from "prop-types";
import '../style/containers/_ContentModal.scss';

const Modal = ({opened, content, children}) => {
    const [isOpened, setisOpened] = useState(opened);
    useEffect(() => {
        setisOpened(opened)
    }, [opened])
    return(
        <>
            {children({isOpened, setisOpened})}
            {
                isOpened && (
                    <div>
                        <div>
                            <div className="modal_window">
                                <button className="close_modal" onClick={() => setisOpened(false)}>X</button>
                                {content}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
Modal.defaultProps= {opened:false};
Modal.PropType = {
    opened: PropType.bool,
    content: PropType.node.isRequired,
    children: PropType.func.isRequired
} 
export default Modal;
