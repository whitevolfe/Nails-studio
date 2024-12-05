import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function Booking() {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '8c690bfc-1701-4079-b82c-0a5a6f2b487d');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setBooking({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
      });
      //   setResult('Form Submitted Successfully');
      //   event.target.reset();
      // } else {
      //   console.log('Error', data);
      //   // setResult(data.message);
      // }
      setShowConfirmation(true);
      event.target.reset();
    } else {
      // setResult(data.message || 'An error occurred. Please try again.');
    }
    console.log('Booking submitted:', booking);
  };

  return (
    <Container>
      <h1 className='text-center mb-5'>Book an Appointment</h1>
      {showConfirmation ? (
        <Alert variant='success'>
          Thank you for your booking! We'll confirm your appointment shortly.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={booking.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={booking.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='tel'
              name='phone'
              value={booking.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='date'
              name='date'
              value={booking.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Time</Form.Label>
            <Form.Control
              type='time'
              name='time'
              value={booking.time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Service</Form.Label>
            <Form.Control
              as='select'
              name='service'
              value={booking.service}
              onChange={handleChange}
              required
            >
              <option value=''>Select a service</option>
              <option value='manicure'>Manicure</option>
              <option value='pedicure'>Pedicure</option>
              <option value='nailArt'>Nail Art</option>
              <option value='nailArt'>Nail Extension</option>
              <option value='nailArt'>Nail Enhancement</option>
              <option value='nailArt'>Foot/Hand Massage For Men</option>
              <option value='nailArt'>Foot/Hand Massage For Women</option>
              <option value='nailArt'>Soak Off</option>
              
            </Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit' style={{marginBottom:20}}>
            Book Appointment
          </Button>
        </Form>
      )}
    </Container>
  );
}
