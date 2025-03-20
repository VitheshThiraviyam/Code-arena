import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !registerNumber || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/studentlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          registernumber: registerNumber,
          password 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setName('');
        setRegisterNumber('');
        setPassword('');
      } else {
        setError(data.message);
        setMessage('');
      }
    } catch (error) {
      setError('Server Error');
      setMessage('');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="title">Code Arena</h1>
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Name"
              required
            />
          </div>
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
          {message && <p className="success-message">{message}</p>}

          <button type="submit" className="submit-button">
            Register
          </button>
          <div className='logins'>
          <p>Already Registered ? </p>
          <Link to='/Studentlogin'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
