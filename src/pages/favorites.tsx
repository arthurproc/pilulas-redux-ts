import { useSelector } from 'react-redux';
import Menu from '../components/menu';
import CardContainer from '../components/card-container';
import { ReduxState } from '../types';

function Favorites() {
  const { favPhotos } = useSelector((state: ReduxState) => state.unsplash);
  return (
    <div>
      <Menu />
      <div className="is-flex is-justify-content-center mt-4 mb-4">
        <h1 className="title is-1">Favoritas ⭐️</h1>
      </div>
      {
        favPhotos.length <= 0
          ? (
            <h3 className="title is-3 has-text-centered">
              Nenhuma foto favorita adicionada!
            </h3>
          )
          : <CardContainer photos={ favPhotos } />
      }
    </div>
  );
}

export default Favorites;
