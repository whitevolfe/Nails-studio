import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import nails1 from '../Images/nails1.jpeg';
import nails2 from '../Images/nails2.jpeg';
import nails4 from '../Images/nails4.jpeg';
import nails6 from '../Images/nails6.jpeg';
import nails21 from '../Images/nails21.jpeg';
import nails7 from '../Images/nails7.jpeg';
import nails13 from '../Images/nails13.jpeg';
import nails16 from '../Images/nails16.jpeg';
import nails20 from '../Images/nails20.jpeg';

const images = [

  { src: nails2, alt: 'Nail Art 2' },
  { src: nails4, alt: 'Nail Art 4' },
  { src: nails21, alt: 'Nail Art 21' },
  { src: nails1, alt: 'Nail Art 1' },
  { src: nails6, alt: 'Nail Art 6' },
  { src: nails7, alt: 'Nail Art 7' },
  { src: nails13, alt: 'Nail Art 13' },
  { src: nails16, alt: 'Nail Art 16' },
  { src: nails20, alt: 'Nail Art 20' },
  
  
  
  
];

export default function Gallery() {
  return (
    <Container>
      <h1 className="text-center mb-5">Our Gallery</h1>
      <Row>
        {images.map((image, index) => (
          <Col md={4} key={index} className="mb-4">
            <Image src={image.src} alt={image.alt} fluid rounded className="shadow-sm" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
