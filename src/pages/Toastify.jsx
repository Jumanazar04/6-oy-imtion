import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Toastify = () => {
    const notify = () => toast("login yoki parol xato")
    return (
        <div>
            <button onClick={notify}>adjkd</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
        </div>
    );
}

export default Toastify;
