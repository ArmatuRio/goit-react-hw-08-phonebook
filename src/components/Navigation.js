import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import styles from './AppBar.module.css';
const { NavLink } = require('react-router-dom');

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" exact className={styles.home}>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
