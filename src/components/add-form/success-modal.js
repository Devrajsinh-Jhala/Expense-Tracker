import React from "react";
import "./success-modal.css";
import Modal from "react-modal";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessModal = ({ isModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fad0c9ff",
      borderRadius: "12px",
    },
  };
  return (
    <div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div className="modal-inner">
          <label>Bingo! Tracking will keep your pockets secure.</label>
          <img
            src={require("../../assets/images/added-image.png")}
            alt="Expense Added Successfully"
            className="modal-inner-image"
          />

          <Link to={"/"}>
            <div className="modal-inner-button">
              <FaHome />
              <label>Home</label>
            </div>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default SuccessModal;
