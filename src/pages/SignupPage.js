import React from 'react';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
