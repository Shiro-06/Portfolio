import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './ContactForm.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que tous les champs sont remplis
    if (formData.name && formData.email && formData.message) {
      // Envoyer le formulaire via EmailJS
      emailjs.send(
        'service_xzaposi', // Remplacez par votre service ID
        'template_hgyya2q', // Remplacez par votre template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'y6L1UGXgbYxN9E6rn' // Remplacez par votre user ID
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succés !');
      }).catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Container className="contact-form-section" id="contact">
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Enter your message"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;