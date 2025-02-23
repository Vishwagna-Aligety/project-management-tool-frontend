import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset link sent to:', email);
    alert('Password reset link sent!');
  };

  return (
    <Container className="auth-container">
      <Card className="glass-card">
        <h1>Forgot Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">Send Reset Link</Button>
        </Form>
        <p className="mt-3"><Link to="/">Back to Signin</Link></p>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
