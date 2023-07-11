import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../components/menu';
import CardContainer from '../components/card-container';
import { fetchPhotosThunk } from '../redux/actions';
import { Dispatch, ReduxState } from '../types';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [shouldShowEmptySearchWarning, setShouldShowEmptySearchWarning] = useState(false);
  const dispatch: Dispatch = useDispatch();

  const { unsplash: { isLoading, photos } } = useSelector((state: ReduxState) => state);

  const handleClick = () => {
    if (searchTerm) {
      // Buscar fotos e remover warning da tela
      dispatch(fetchPhotosThunk(searchTerm));
      setShouldShowEmptySearchWarning(false);
    } else {
      setShouldShowEmptySearchWarning(true);
    }
  };

  useEffect(() => {
    dispatch(fetchPhotosThunk('praia'));
  }, []);

  return (
    <div>
      <Menu />

      <div className="field has-addons is-flex is-justify-content-center mt-4">
        <div className="control">
          <input
            className={ `input ${shouldShowEmptySearchWarning && 'is-danger'}` }
            name="searchTerm"
            type="text"
            placeholder="Praia"
            value={ searchTerm }
            onChange={ ({ target }) => setSearchTerm(target.value) }
          />
        </div>
        <div className="control">
          <button
            className={ `button is-info ${isLoading && 'is-loading'}` }
            onClick={ handleClick }
          >
            Buscar
          </button>
        </div>
      </div>

      { shouldShowEmptySearchWarning
          && (
            <p
              className="help is-danger is-flex is-justify-content-center mt-4"
            >
              Campo de busca deve conter um termo!
            </p>
          )}
      { !isLoading && <CardContainer photos={ photos } />}
    </div>
  );
}

export default Home;
