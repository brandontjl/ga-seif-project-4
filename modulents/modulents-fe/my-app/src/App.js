import React, { useState } from 'react';
import '.App.css';
import LoginForm from './UserLoginForm';
import Welcome from './UserWelcome';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
