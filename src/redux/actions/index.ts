import { fetchPhotos } from '../../services/photo-API';
import { Dispatch, Photo } from '../../types';

// Action types
export const USER_LOGIN = 'USER_LOGIN';

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const FAVORITE_PHOTO = 'FAVORITE_PHOTO';
export const REMOVE_FAVORITE_PHOTO = 'REMOVE_FAVORITE_PHOTO';

// Action creators
export const userLogin = (email: string) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

export const favoritePhoto = (photo: Photo) => ({
  type: FAVORITE_PHOTO,
  payload: {
    photo,
  },
});

export const removeFavoritePhoto = (id: string) => ({
  type: REMOVE_FAVORITE_PHOTO,
  payload: {
    id,
  },
});

const fetchPhotosRequest = () => ({
  type: FETCH_PHOTOS_REQUEST,
});

const fetchPhotosSuccess = (photos: Photo[]) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: {
    photos,
  },
});

const fetchPhotosFailure = (errorMessage: string) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: {
    errorMessage,
  },
});

// Thunks
export const fetchPhotosThunk = (searchTerm: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchPhotosRequest());
    const photos = await fetchPhotos(searchTerm);
    dispatch(fetchPhotosSuccess(photos));
  } catch (error) {
    dispatch(fetchPhotosFailure('Algo deu errado!'));
  }
};
