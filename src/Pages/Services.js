import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const services = [
  { 
    name: 'Express Pedicure', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Shaping' },
      { name: 'Cleaning' },
      { name: 'Cuticle Trimming' },
      { name: 'Lotion'},
      { name: 'Regular Colour'},
    ]
  },

  { 
    name: 'Signature Pedicure', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Soak' },
      { name: 'Shaping'},
      { name: 'Cleaning'},
      { name: 'Cuticle Trimming'},
      { name: 'Scrub/File'},
      { name: 'Lotion'},
      { name: '10 min massage'},
      { name: 'Regular Colour'},
    ]
  },

  { 
    name: 'Pamper Pedicure', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Soak' },
      { name: 'Shaping'},
      { name: 'Cleaning'},
      { name: 'Cuticle Trimming'},
      { name: 'Scrub/File'},
      { name: 'Lotion'},
      { name: '20 min massage'},
      { name: 'Deep dermal Treatment'},
      { name: 'Regular Colour'},
    ]
  },

  { 
    name: 'Nail Extension', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Acrylic nails + gel polish' },
      { name: 'Gel nail + gel polish' },
      { name: 'Gel nail + normal polish' },
      { name: 'Gel colour soak off'},
      { name: 'soak off dipping'},
      { name: 'Nail extension soak'},
      { name: 'Builder gel + nail repair'},
      { name: 'Nail form'},
      { name: 'Gelly tip gel on extension'},
    ]
  },

  { 
    name: 'Nail Art Work', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Stone work' },
      { name: 'French nails' },
      { name: 'Chrome nails' },
      { name: 'Ombre nails'},
      { name: 'Spider gel art'},
      { name: 'Dry flowers art'},
      { name: 'Glitter work'},
      { name: 'Acrylic flowers'},
    ]
  },

  { 
    name: 'Bridal Package', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Manicure' },
      { name: 'Pedicure' },
      { name: 'Nail extension' },
      { name: 'Toe nail extension'},
      { name: 'Bridal offer'},
    ]
  },

  { 
    name: 'Express Manicure', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Shaping' },
      { name: 'Cleaning' },
      { name: 'Cuticle Trimming' },
      { name: 'Lotion'},
      { name: 'Regular Colour'},
    ]
  },

  { 
    name: 'Signature Manicure', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Soak' },
      { name: 'Shaping'},
      { name: 'Cleaning'},
      { name: 'Cuticle Trimming'},
      { name: 'Scrub'},
      { name: 'Lotion'},
      { name: '05 min massage'},
      { name: 'Regular Colour'},
    ]
  },

  { 
    name: 'Pamper Manicure', 
    description: 'A traditional padicure with your choice of polish.',
    subServices: [
      { name: 'Soak' },
      { name: 'Shaping'},
      { name: 'Cleaning'},
      { name: 'Cuticle Trimming'},
      { name: 'Scrub'},
      { name: 'Lotion'},
      { name: '15 min massage'},
      { name: 'Deep dermal Treatment'},
      { name: 'Regular Colour'},
    ]
  },

  
  { 
    name: 'jelly soak',  
    description: 'Long-lasting gel polish for a flawless finish.' },
    
  { name: 'Hand massage', description: '30 Minutes & 1 hour' },
  { name: 'Foot massage', description: '30 minutes & 1 hour' },
  { name: 'Nail Art',  description: 'Express yourself with our custom nail art designs.' },
  { name: 'Acrylic Full Set', description: 'Full set of acrylic nails for added length and strength.' },
  { name: 'Express Manicure',nested : '.Shaping',nested1:'.Cleaning',nested2:'.Cuticle Trimming',nested3:'.Lotion',nested4:'.Regular Colour' ,description: 'Full set of acrylic nails for added length and strength.' },
  { name: 'Signature Manicure',nested : '.Soak',nested1:'.Shaping',nested2:'.Cleaning',nested3:'.Cuticle Trimmimg',nested4:'.Scrub' ,description: 'Full set of acrylic nails for added length and strength.' },

  
]

export default function Services() {
  return (
    <Container>
      <h1 className="text-center mb-5">Our Services</h1>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.name} className="mb-4 ">
            <Card className="h-100 shadow-sm">
              <Card.Body >
                <Card.Title className="service-title">{service.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{service.price}</Card.Subtitle>
                <Card.Text></Card.Text>
                {service.subServices && service.subServices.map((subService) => (
                  <Card key={subService.name} className="mt-2">
                    <Card.Body className="sub-service-card">
                      <Card.Title>{subService.name}</Card.Title>
                      <Card.Text>{subService.description}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}