import { AnyAction } from 'redux';
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  FAVORITE_PHOTO,
  REMOVE_FAVORITE_PHOTO,
} from '../actions';
import { UnsplashReducer } from '../../types';

const INITIAL_STATE = {
  photos: [],
  favPhotos: [],
  isLoading: false,
  errorMessage: null,
};

const unsplashReducer = (
  state: UnsplashReducer = INITIAL_STATE,
  action: AnyAction,
): UnsplashReducer => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        photos: action.payload.photos,
      };
    }
    case FETCH_PHOTOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    case FAVORITE_PHOTO: {
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload.photo],
      };
    }
    case REMOVE_FAVORITE_PHOTO: {
      return {
        ...state,
        favPhotos:
          state.favPhotos.filter((favPhoto) => favPhoto.id !== action.payload.id),
      };
    }
    default: return state;
  }
};

export default unsplashReducer;
