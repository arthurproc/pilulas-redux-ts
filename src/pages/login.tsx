import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/actions';
import { Dispatch } from '../types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(userLogin(email));
    navigate('/home');
  };

  return (
    <div className="login-form-container">
      <form className="form login-form box" onSubmit={ handleSubmit }>
        <h4 className="heading login-form-container-title">Boas vindas ao Photrybe! 📸</h4>
        <div className="field control has-icons-left">
          <input
            className="input is-medium"
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={ email }
            onChange={ handleChange }
          />
        </div>
        <div className="field control has-icons-left">
          <input
            className="input is-medium"
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ handleChange }
          />
        </div>
        <button type="submit" className="button is-primary is-medium">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default connect()(Login);
