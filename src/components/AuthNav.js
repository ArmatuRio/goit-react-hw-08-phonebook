import styles from './AppBar.module.css';
const { NavLink } = require('react-router-dom');

export default function AuthNav() {
  return (
    <div className={styles.userNav}>
      <NavLink className={styles.register} to="/register" exact>
        Sign up
      </NavLink>
      <NavLink to="/login" exact>
        Log in
      </NavLink>
    </div>
  );
}
