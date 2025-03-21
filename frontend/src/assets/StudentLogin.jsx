import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registerNumber.trim() || !password.trim()) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/student/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          registernumber: registerNumber.trim(),
          password: password.trim() 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the username in localStorage (without using JWT tokens)
        localStorage.setItem('userName', data.userName);
        navigate('/Studenthome');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('Server Error. Please try again later.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="title">Code Arena</h1>
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              className="input-field"
              placeholder="Register Number"
              required
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Password"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">Login</button>

          <div className="logins">
            <p>New student?</p>
            <Link to="/sregister">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
