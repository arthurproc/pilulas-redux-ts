import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReduxState } from '../types';

export default function Menu() {
  const { email } = useSelector((state: ReduxState) => state.user);

  return (
    <nav className="navbar is-primary menu">
      <div className="navbar-brand">
        <i className="navbar-item fa-solid fa-camera is-medium">Tryphoto</i>
        <Link className="navbar-item has-text-primary-light" to="/home">Home</Link>
        <Link
          className="navbar-item has-text-primary-light"
          to="/favorites"
        >
          Favoritos
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          { email }
        </div>
        <div className="navbar-item">
          <Link className="button is-danger" to="/">Sair</Link>
        </div>
      </div>
    </nav>
  );
}
