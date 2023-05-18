import React from 'react';

import { closeModal } from '../scripts/viewTransitions';

function Modal() {
    return (
        <aside className="modal" onClick={closeModal}>
            <img
                className="modal-image br-1"
                src=""
                alt="Modal view of a Pokemon."
            />
        </aside>
    );
}

export default Modal;
