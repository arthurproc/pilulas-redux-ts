import { useDispatch, useSelector } from 'react-redux';
import { favoritePhoto, removeFavoritePhoto } from '../redux/actions';
import FavoriteButton from './favorite-button';
import { Dispatch, Photo, ReduxState } from '../types';

type CardProps = {
  image: string;
  authorName: string;
  authorBio: string;
  photo: Photo;
};

function Card(props: CardProps) {
  const dispatch: Dispatch = useDispatch();
  const { favPhotos } = useSelector((state: ReduxState) => state.unsplash);

  const {
    image,
    authorName,
    authorBio,
    photo,
  } = props;

  const handleFavorite = (isFavorite: boolean) => {
    // Dispara action para favoritar ou remover dos favoritos a imagem
    if (isFavorite) {
      dispatch(removeFavoritePhoto(photo.id));
    } else {
      dispatch(favoritePhoto(photo));
    }
  };

  const isFavorite = favPhotos.some((favPhoto) => favPhoto.id === photo.id);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={ image } alt="search result" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <FavoriteButton
              isFavorite={ isFavorite }
              onFavorite={ () => handleFavorite(isFavorite) }
            />
          </div>
          <div className="media-content">
            <p className="title is-4">{authorName}</p>
          </div>
        </div>

        <div className="content">
          {authorBio}
          <br />

        </div>
      </div>
    </div>
  );
}

export default Card;
