import React from "react";

export function ErrorModal(props) {
  return (
    <div className={!props.show ? "d-none" : ""} id="submitErrorMessage">
      <div className="text-center text-danger mb-3">Error sending message!</div>
    </div>
  );
}
