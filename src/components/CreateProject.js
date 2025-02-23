import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function CreateProject() {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project Created: ${projectName}`);
  };

  return (
    <Container className="content-container">
      <div className="glass-card">
        <h1>Create Project</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Create</Button>
        </Form>
      </div>
    </Container>
  );
}

export default CreateProject;
