import _ from 'lodash';
import { FETCH_NEWS, FETCH_SOURCES } from '../actions/types';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_NEWS:
      return [...state, ...action.payload.articles];
      //return action.payload.articles; => test
    case FETCH_SOURCES:
      return _.mapKeys(action.payload.data, 'articles');
    default:
      return state;
  }
}
