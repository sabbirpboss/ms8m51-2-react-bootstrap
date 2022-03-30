import React from "react";
import { Spinner } from "react-bootstrap";

const Spinner2 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <h4>Tring To Use Spinner:</h4>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="border" variant="danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" variant="info" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" variant="warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" variant="success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Spinner2;
