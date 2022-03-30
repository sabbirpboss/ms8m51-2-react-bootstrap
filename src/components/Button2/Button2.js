import React from 'react';
import { Button } from 'react-bootstrap';

const Button2 = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <h4>Tring To Use Button:</h4>
            <Button variant='danger'>My Button</Button>
            <Button variant='success'>My Button</Button>
            <Button variant='warning'>My Button</Button>
        </div>
    );
};

export default Button2;