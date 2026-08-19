import { useState } from "react";
import InfoModal from "./infoModals.jsx";
import ModalContext from "./modalContextValue";

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (node) => {
    setContent(node);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      <InfoModal isOpen={isOpen} onClose={closeModal}>
        {content}
      </InfoModal>
    </ModalContext.Provider>
  );
}
