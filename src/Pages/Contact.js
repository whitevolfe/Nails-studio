import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export default function Contact() {
  return (
    <Container>
      <h1 className="text-center mb-5">Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4 className='visit-title'>Visit Us</h4>
          <p>55 Vidyalayam Rd, Trincomalee</p>
          <p>Phone: +94779556605 / 0262056866</p>
          <p>Email: nailsbymi6@gmail.com</p>
          <div className="mt-4">
            <iframe
              title="Google Maps Location of Nails By Mi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.211405555809!2d81.22949897399153!3d8.575661295922579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbd00033ed8d7%3A0x784b278574e6fdfc!2sNails%20By%20Mi%20-%20Best%20Nails%20Salon%20Trincomalee!5e0!3m2!1sen!2slk!4v1731177574964!5m2!1sen!2slk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  )
}