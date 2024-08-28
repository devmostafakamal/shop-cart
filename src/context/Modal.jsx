import react from "react";
import "./Modal.scss";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &#128512;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
