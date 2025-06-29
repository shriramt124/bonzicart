import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showSuccessAlert = (message, router, redirectUrl = null) => {
  MySwal.fire({
    title: 'Success!',
    text: message,
    icon: 'success',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed && redirectUrl) {
      router.push(redirectUrl); // Use router.push for client-side navigation
    }
  });
};

// This component is not meant to be rendered directly, but to export the showAlert function.
const AuthSuccessAlert = () => {
  return null;
};

export default AuthSuccessAlert;