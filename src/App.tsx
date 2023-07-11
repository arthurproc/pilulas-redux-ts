import { Route, Routes } from 'react-router-dom';
import { Login, Home, Favorites } from './pages';
import './App.css';
import 'bulma/css/bulma.min.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
    </Routes>
  );
}
