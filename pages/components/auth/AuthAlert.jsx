import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function AuthAlert({ message, type }) {
    // This component won't render anything directly.
    // It's just a placeholder for the function.
    return null;
}

export const showAlert = ({ title, message, icon, redirectUrl }) => {
    MySwal.fire({
        title: title || (icon === 'success' ? 'Success!' : 'Error!'),
        text: message,
        icon: icon || 'error',
        confirmButtonText: 'Ok',
    }).then((result) => {
        if (result.isConfirmed && redirectUrl) {
            window.location.href = redirectUrl;
        }
    });
};

export default AuthAlert;