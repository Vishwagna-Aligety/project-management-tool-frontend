import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function MyProjects() {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];

  return (
    <Container className="dashboard-main">
      <h1>My Projects</h1>
      <Row className="project-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Col key={index}>
              <Card className="glass-card">
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <p>{project.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </Row>
    </Container>
  );
}

export default MyProjects;