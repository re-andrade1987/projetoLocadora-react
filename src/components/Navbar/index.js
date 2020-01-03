import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Navbar() {
  return (
    <div className="Nav">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/AboutHeroes"> <li>About Heroes</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;
