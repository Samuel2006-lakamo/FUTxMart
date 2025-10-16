import { createContext, useContext, useState, cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClose } from "../hooks/useOutsideClose";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClose(close);

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[1000] px-4 sm:px-0">
      <div
        ref={ref}
        className="relative w-full max-w-md bg-white rounded-xl shadow-xl p-6 sm:p-10 transition-all"
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <HiXMark className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
