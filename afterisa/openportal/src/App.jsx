import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>Open Portal - Assignment</h1>
                <hr />
            </div>
            <div className="modals">
                <button onClick={() => setShowModal(true)}>Open</button>
                {
                    showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <h1>Hello form modal</h1>
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </Modal>
                    )
                }
            </div>
        </div>
    );
}

export default App;
