import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = event => {
    const typeOfInput = event.currentTarget.name;
    const input = event.currentTarget.value;
    setUser(prevState => ({ ...prevState, [typeOfInput]: input }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register(user));
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div className="Wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="Form">
        <label className="Form__lable">
          Name
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          ></input>
        </label>
        <label className="Form__lable">
          Mail
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          ></input>
        </label>
        <label className="Form__lable">
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
