
import {createStore, applyMiddleware} from 'redux';
import {post} from '../reducers';
import { combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'

export const allReducer = combineReducers({
    post: post
});

export default function configureStore(initialState) {
  return createStore(allReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ));
}
