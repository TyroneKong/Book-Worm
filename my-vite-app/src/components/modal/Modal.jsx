import "./Modal.scss";
import React from "react";
import { useState } from "react";

const Modal = (props) => {
  const [data, allData] = useState([]);
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
