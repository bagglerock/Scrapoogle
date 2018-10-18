import React from "react";

import modal from "./Modal.css";

const Modal = (props) => {
    return (
        <div className={modal.modal}>
            <div className={modal.modalContent}>
                <div className={modal.closeContainer}>
                    <h1>title</h1>
                </div>
                <div className={modal.modalContent}>
                    <form>
                        <label>Username</label>
                        <input type="text"></input>
                        <label>Password</label>
                        <input type="text"></input>
                        <label>Email</label>
                        <input type="text"></input>
                    </form>
                </div>
                <div className={modal.modalButtonContainer}>
                    <button>button 1</button>
                    <button>button 2</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;