import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h2>Inicio de</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email" className="lexend">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="lexend">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="lexend">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
