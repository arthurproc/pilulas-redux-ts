import { AnyAction } from 'redux';
import { USER_LOGIN } from '../actions';
import { UserReducer } from '../../types';

const INITIAL_STATE: UserReducer = {
  email: 'email@example.com',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction): UserReducer => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        email: action.payload.email,
      };
    }
    default: return state;
  }
};

export default userReducer;
