// src/components/Modal.js
import React from "react";

const Modal = () => {
  return (
    <div
      id="modal"
      style={{
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="modal-content"
        style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
      >
        {/* Modal content will be populated dynamically */}
      </div>
    </div>
  );
};

export default Modal;
