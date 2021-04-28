import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
function ModalSide(props) {
  return (
    <Modal
      size="lg"
      show={props.modalIsOpen}
      onHide={() => props.setModalIsOpen(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <div className="modal-header"  closeButton>
        <p>{props.res.user.name}</p>
      </div>
      <div className="modal-body">
        <img src={props.res.urls.small} alt="" />
        </div>
        <div className="modal-footer">
        <strong>
          {" "}
          <p>{props.res.user.location}</p>
        </strong>
        </div>
    </Modal>
  );
}

export default ModalSide;
