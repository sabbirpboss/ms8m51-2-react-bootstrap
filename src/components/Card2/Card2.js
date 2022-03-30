import React from "react";
import { Card } from "react-bootstrap";

const Card2 = ({product}) => {
  const {name, price, img, info} = product;
  return (
    <Card className="me-2 border border-info rounded">
      <Card.Img variant="top" className="rounded mx-auto m-1" style={{height: "150px", width: "214px"}} src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p><small className="fw-light">Price: ${price}</small></p>
        <Card.Text>
          {info}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-info">
        <span className="fw-bolder text-white">Buy Now</span>
      </Card.Footer>
    </Card>
  );
};

export default Card2;
