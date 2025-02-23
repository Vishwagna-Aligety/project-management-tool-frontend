import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function CreateProject() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [role, setRole] = useState('Developer');
  const [stage, setStage] = useState('Planning');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      projectName,
      description,
      startDate,
      endDate,
      priority,
      role,
      stage,
    };
    alert(`Project Created: ${JSON.stringify(newProject, null, 2)}`);
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

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Priority Level</Form.Label>
            <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Assign Role</Form.Label>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Project Manager">Project Manager</option>
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
              <option value="Designer">Designer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="stage">
            <Form.Label>Project Stage</Form.Label>
            <Form.Select value={stage} onChange={(e) => setStage(e.target.value)}>
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">Create Project</Button>
        </Form>
      </div>
    </Container>
  );
}

export default CreateProject;