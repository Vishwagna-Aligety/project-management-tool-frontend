import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup successful:', formData);
    navigate('/dashboard');
  };

  return (
    <Container className="auth-container">
      <Card className="glass-card">
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
          </Form.Group>
          <Button variant="primary" type="submit">Signup</Button>
        </Form>
        <p className="mt-3">Already have an account? <Link to="/">Signin</Link></p>
      </Card>
    </Container>
  );
}

export default Signup;