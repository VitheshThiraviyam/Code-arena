import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyLogin = () => {
  const [staffid, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!staffid || !password) {
      setError('Both fields are required');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/facultylogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ staffid, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        navigate('/Adminhome', { state: { facultyName: data.facultyName} });
      } else {
        setError(data.message || 'Login Failed');
      }
  
    } catch (err) {
      setError('Server Error, please try again later');
    }
  };
  
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="title">Code Arena</h1>
        <h2>Faculty Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              id="staffId"
              value={staffid}
              onChange={(e) => setStaffId(e.target.value)}
              className="input-field"
              placeholder="Staff ID"
              required
            />
          </div>
  
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Password"
              required
            />
          </div>
  
          {error && <p className="error-message">{error}</p>}
  
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacultyLogin;
