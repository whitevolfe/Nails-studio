import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const services = [
  { name: 'Classic Manicure', price: '$25', description: 'A traditional manicure with your choice of polish.' },
  { name: 'Gel Manicure', price: '$35', description: 'Long-lasting gel polish for a flawless finish.' },
  { name: 'Classic Pedicure', price: '$35', description: 'Rejuvenate your feet with our classic pedicure.' },
  { name: 'Deluxe Pedicure', price: '$50', description: 'An indulgent pedicure with extended massage and paraffin dip.' },
  { name: 'Nail Art', price: 'From $10', description: 'Express yourself with our custom nail art designs.' },
  { name: 'Acrylic Full Set', price: '$60', description: 'Full set of acrylic nails for added length and strength.' },
]

export default function Services() {
  return (
    <Container>
      <h1 className="text-center mb-5">Our Services</h1>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.name} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{service.price}</Card.Subtitle>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}