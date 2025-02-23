import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import CreateProject from './components/CreateProject';
import MyProjects from './components/MyProjects';
import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
