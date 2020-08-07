
import * as actionTypes from '../actions';

export const post = (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
      default:
            return state;
    }
  };