import { useEffect } from "react";
import { createPortal } from "react-dom";

function InfoModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlay = (
    <div
      className="info-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="container info-modal-content glass rounded"
        role="dialog"
        aria-modal="true"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {title && <h2 className="info-modal-title">{title}</h2>}
        <div className="info-modal-body">{children}</div>
        <div className="info-modal-actions">
          <button onClick={onClose} className="info-modal-close">Cerrar</button>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}

export default InfoModal;
