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
        'service_xzaposi', 
        'template_hgyya2q', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'y6L1UGXgbYxN9E6rn' 
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès !');
      }).catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <h2 className="contact-title">Contactez-moi</h2>
      <Container fluid className="contact-form-section" id="contact">
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="formName">
            <Form.Label>Nom :</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Adresse e-mail :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse e-mail"
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message :</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Entrez votre message"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;