import React from "react";

export function SuccessModal(props) {
  return (
    <div className={!props.show ? "d-none" : ""} id="submitSuccessMessage">
      <div className="text-center text-white mb-3">
        <div className="fw-bolder">Form submission successful!</div>
      </div>
    </div>
  );
}
