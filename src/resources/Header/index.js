import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link to='/show'>Show</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
