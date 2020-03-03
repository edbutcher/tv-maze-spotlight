import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to='/show'>Show</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to='/episodes'>Episodes</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
