import "./PortalModal.css";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from "@mui/material/Button";

export default function PortalExample(props) {
  const [showModal, setShowModal] = useState(false);

  // Appeler la fonction qui est passée en prop, si elle existe
  const handleButtonClick = () => {
    setShowModal(true);
    if (props.onOpen) {
      props.onOpen(); // Si la fonction onOpen est passée en prop, on l'appelle ici
    }
  };

  return (
    <>
      <Button variant='contained' onClick={handleButtonClick}>Save</Button>
      {showModal && createPortal(
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div>Employee Created!</div>
            <Button variant='contained' onClick={() => setShowModal(false)}>Close</Button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
