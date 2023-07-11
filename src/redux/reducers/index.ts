import { combineReducers } from 'redux';
import unsplashReducer from './unsplash';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  unsplash: unsplashReducer,
});

export default rootReducer;
