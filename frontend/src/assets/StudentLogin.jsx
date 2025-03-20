import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const StudentLogin = () => {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registerNumber || !password) {
      setError('Both fields are required');
      return;
    }

    console.log('Register Number:', registerNumber);
    console.log('Password:', password);

    setRegisterNumber('');
    setPassword('');
    setError('');
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
              id="registerNumber"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              className="input-field"
              placeholder='Register number'
              required
            />
            <label htmlFor="registerNumber" className={registerNumber ? 'active' : ''}>
              
            </label>
          </div>

          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder='Password'
              required
            />
            <label htmlFor="password" className={password ? 'active' : ''}>
              
            </label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">
            Login
          </button>
          <div className='logins'>
          <p>Are you are a new student ? </p>
          <Link to='/sregister'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
