import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        {
          id: 1,
          name: "Macbook Pro",
          price: 1300,
          img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_medium.jpg",
          info: "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.",
        },
        {
          id: 2,
          name: "Macbook Air",
          price: 1000,
          img: "https://www.apple.com/v/macbook-air/n/images/overview/hero_endframe__ea0qze85eyi6_medium.jpg",
          info: "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. An advanced Neural Engine for up to 9x faster machine learning.",
        },
        {
          id: 3,
          name: "Mac Mini",
          price: 1500,
          img: "https://www.apple.com/v/mac-mini/o/images/overview/hero__x8ruukomx2au_medium.jpg",
          info: "The Apple M1 chip takes our most versatile, do-it-all desktop into another dimension. With up to 3x faster CPU performance. Up to 6x faster graphics. An advanced Neural Engine for up to 15x faster machine learning.The Apple M1 chip takes our most versatile, do-it-all desktop into another dimension. With up to 3x faster CPU performance. Up to 6x faster graphics. An advanced Neural Engine for up to 15x faster machine learning.",
        },
      ];
    return (
        <div className='container'>
            <h2 className='text-white bg-info p-4 mt-3 rounded'>This is cards</h2>
            <CardGroup>
                {
                    products.map(product => <Card2 
                        key={product.id}
                        product={product}
                        ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;