import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import nails1 from '../Images/nails11.jpeg'
import nails22 from '../Images/nails22-removebg-preview.png'


export default function About() {
  return (
    <Container>
      <h1 className="text-center mb-5">About Nails By MI</h1>
      <Row className="align-items-center mb-5">
        <Col md={4}>
          <Image src={nails1} fluid rounded />
        </Col>
        <Col md={6}>
          <h2 className='aboutus-story'>Our Story</h2>
          <p>
            Nails By MI was founded in 2010 with a vision to provide exceptional nail care services in a luxurious and
            relaxing environment. Our team of skilled technicians is dedicated to delivering the highest quality
            treatments using premium products and innovative techniques.
          </p>
          <p>
            We believe that every client deserves to feel pampered and beautiful. That's why we go above and beyond to
            ensure your experience at Nails By MI is nothing short of extraordinary.
          </p>
        </Col>
      </Row>
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <Row>
        {['Arulthas Premila', 'Arulthas Premila', 'Arulthas Premila'].map((name) => (
          <Col md={4} key={name} className="text-center mb-4">
            <Image
              src={nails22}
              alt={name}
              roundedCircle
              className="mb-3"
            />
            <h4>{name}</h4>
            <p>Master Nail Technician</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}