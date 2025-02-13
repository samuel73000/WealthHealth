import "./PortalModal.css";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from "@mui/material/Button";

export default function PortalExample(props) {
  const [showModal, setShowModal] = useState(false);

  // Appeler la fonction qui est passée en prop, si elle existe
  const handleButtonClick = () => {
    if (props.onOpen) {
      const isValid = props.onOpen(); // Récupérer un booléen indiquant si la validation est passée
      if (!isValid) return; // Ne pas ouvrir la modal si la validation échoue
    }
    setShowModal(true); // Ouvre la modal seulement si les champs sont valides
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
