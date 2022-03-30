import React from "react";
import { Button, Card } from "react-bootstrap";

const Card2 = ({product}) => {
  const {name, price, img, info} = product;
  return (
    <Card className="me-2 border border-info rounded">
      <Card.Img variant="top" className="rounded mx-auto m-1" style={{height: "150px", width: "214px"}} src={img} />
      <Card.Body>
        <Card.Title className="text-success fs-4">{name}</Card.Title>
        <p><small className="fw-light">Price: ${price}</small></p>
        <Card.Text>
          {info}
        </Card.Text>
      </Card.Body>
      <Card className="border-0">
        <Button variant="success" className="w-100">Buy Now</Button>
      </Card>
    </Card>
  );
};

export default Card2;
