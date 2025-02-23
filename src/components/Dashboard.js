import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2>Project Management</h2>
        <ul>
          <li><Link to="/create-project">Create Project</Link></li>
          <li><Link to="/my-projects">My Projects</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
      <Container className="dashboard-main">
        <h1>Welcome to Your Dashboard</h1>
        <Row>
          <Col md={6}>
            <Card className="glass-card">
              <Card.Body>
                <Card.Title>Active Projects</Card.Title>
                <p>Track your ongoing projects here.</p>
                <Button variant="primary" as={Link} to="/my-projects">View Projects</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="glass-card">
              <Card.Body>
                <Card.Title>Create New Project</Card.Title>
                <p>Start a new project with ease.</p>
                <Button variant="success" as={Link} to="/create-project">Create Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;