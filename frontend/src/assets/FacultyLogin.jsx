import React, { useState } from 'react';


const FacultyLogin = () => {
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

    // Clear fields after submission
    setRegisterNumber('');
    setPassword('');
    setError('');
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
              id="registerNumber"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              className="input-field"
              placeholder='Staff id'
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
        </form>
      </div>
    </div>
  );
};

export default FacultyLogin;
