import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';


const modalRoot = document.getElementById('modal-root');

const Modal = ({children, onClose}) => {
    const [modelEl] = useState(document.createElement('div'));

    useEffect(() => {
        modalRoot.appendChild(modelEl);

        return () => {
            modalRoot.removeChild(modelEl);
        }
    }, [modelEl])
    
    return ReactDom.createPortal(
        <div className="modaloverlay" onClick={onClose}>
            {children}
        </div>,
        modelEl
    )
}

export default Modal;
