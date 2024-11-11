import React from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import nails3 from '../Images/nails3.jpeg'
import nails2 from '../Images/nails2.jpeg'
import nails5 from '../Images/nails5.jpeg'
import testimonialImage from '../Images/nails3.jpeg'


export default function Home() {
  return (
    <Container>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1 className="display-4 mb-4">Welcome to Nails By MI</h1>
          <p className="lead mb-4">
            Experience luxury at your fingertips. Our expert nail technicians are dedicated to providing you with the
            highest quality nail care and designs.
          </p>
          <Button className="booking-btn" variant="primary" href="/booking" size="lg" >
            Book an Appointment
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={nails3}
            alt="Luxe Nails Salon"
            className="img-fluid rounded shadow-lg"
          />
        </Col>
      </Row>

   

      <h2 className="text-center mb-4">Our Featured Services</h2>
      <Row>
        {['Manicure', 'Pedicure', 'Nail Art', 'Gel Nails', 'Acrylic Nails', 'Nail Enhancements'].map((service, index) => (
          <Col md={4} key={service} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={index === 0 ? nails2 : index === 1 ? nails5 : nails3} />
              <Card.Body>
                <Card.Title>{service}</Card.Title>
                <Card.Text>Indulge in our luxurious {service.toLowerCase()} experience.</Card.Text>
                <Button variant="outline-primary" href="/services">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center mb-4">Special Promotions</h2>
      <Row>
        <Col md={12} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Summer Special: 20% Off All Services!</Card.Title>
              <Card.Text>
                Enjoy a refreshing summer look with our special promotion. Book your appointment today and treat yourself!
              </Card.Text>
              <Button variant="primary" href="/booking">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      

      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel className="mb-4" controls={true} indicators={false}>
        <Carousel.Item>
          <Col md={12} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <img src={testimonialImage} alt="Customer" className="img-fluid rounded-circle mb-3" style={{ width: '100px' }} />
                <Card.Text>
                  "Nails By MI provided the best manicure I've ever had! The staff is friendly and the atmosphere is relaxing."
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">- Sarah J.</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col md={12} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <img src={testimonialImage} alt="Customer" className="img-fluid rounded-circle mb-3" style={{ width: '100px' }} />
                <Card.Text>
                  "I love my new nails! The service was exceptional and the results are stunning."
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">- Emily R.</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col md={12} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <img src={testimonialImage} alt="Customer" className="img-fluid rounded-circle mb-3" style={{ width: '100px' }} />
                <Card.Text>
                  "A fantastic experience! I will definitely be coming back for more."
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">- John D.</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Carousel.Item>
      </Carousel>

      <h2 className="text-center mb-4">Our Work</h2>
      <Row>
        {['nails3', 'nails2', 'nails5'].map((image, index) => (
          <Col md={4} key={index} className="mb-4">
            <img src={require(`../Images/${image}.jpeg`)} alt={`Nail design ${index + 1}`} className="img-fluid rounded shadow-sm" />
          </Col>
        ))}
      </Row>

      <h2 className="text-center mb-4">Nail Care Tips</h2>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Tips for Healthy Nails</Card.Title>
              <Card.Text>
                <div className="tips-container">
                  <div className="tip-item">
                    <i className="fas fa-check-circle"></i> Keep your nails clean and dry.
                  </div>
                  <div className="tip-item">
                    <i className="fas fa-check-circle"></i> Moisturize your hands and nails regularly.
                  </div>
                  <div className="tip-item">
                    <i className="fas fa-check-circle"></i> Avoid using your nails as tools.
                  </div>
                  <div className="tip-item">
                    <i className="fas fa-check-circle"></i> Trim your nails regularly.
                  </div>
                  <div className="tip-item">
                    <i className="fas fa-check-circle"></i> Use a base coat to protect your nails from staining.
                  </div>
                </div>
              </Card.Text>
              <Button variant="outline-primary" href="/services">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>FAQs</Card.Title>
              <Card.Text>
                <strong>Q: How long do your services take?</strong><br />
                A: Most services take between 30 minutes to 2 hours, depending on the treatment.<br /><br />
                <strong>Q: Do you use vegan or cruelty-free products?</strong><br />
                A: Yes, we prioritize using vegan and cruelty-free products whenever possible.<br /><br />
                <strong>Q: Can I book an appointment online?</strong><br />
                A: Absolutely! You can book your appointment through our website.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
