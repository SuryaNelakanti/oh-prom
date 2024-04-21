import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="hero-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
        </svg>
        <h1>Oh Prom!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Projects</Link>
          </li>
          <li>
            <Link to={`/users/:id`}>Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
