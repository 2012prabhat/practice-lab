import React, { useLayoutEffect,useEffect, useRef } from "react";

function Modal() {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!modalRef.current) return;

    const height = modalRef.current.getBoundingClientRect().height;
    console.log("Modal Height:", height);

    // Center the modal vertically
    modalRef.current.style.marginTop = `-${height / 2}px`;
  }, []);

  return (
    <div ref={modalRef} className="modal">
      This is a modal
    </div>
  );
}

export default Modal;
