import React from 'react';
import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <div>
      <h1>This Is Login Page</h1>
      <Link to='/dashboard'>TO DASHBOARD</Link>
    </div>
  );
}

export default LoginPage;
