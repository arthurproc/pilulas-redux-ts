import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type Photo = {
  id: string;
  urls: {
    small: string;
  };
  user: {
    name: string;
    bio: string;
  };
};

export type UserReducer = {
  email: string;
};

export type UnsplashReducer = {
  photos: Photo[];
  favPhotos: Photo[];
  isLoading: boolean;
  errorMessage: string | null;
};

export type ReduxState = {
  user: UserReducer;
  unsplash: UnsplashReducer;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
