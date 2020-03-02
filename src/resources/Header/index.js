import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul>
      <li>
        <Link to='/show'>Show</Link>
      </li>
    </ul>
  );
}

export default Header;
