import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import noFoto from './no-foto.png';
import { authSelectors, authOperations } from '../../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <div className="UserMenu">
      <img
        src={noFoto}
        alt="user's avatar"
        width="32"
        className="User__avatar"
      />
      <span className="User__greating">Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
