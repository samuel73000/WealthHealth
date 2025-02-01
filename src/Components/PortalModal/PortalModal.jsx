import "./PortalModal.css";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from "@mui/material/Button";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant='contained' onClick={() => setShowModal(true)}>Save</Button>
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
