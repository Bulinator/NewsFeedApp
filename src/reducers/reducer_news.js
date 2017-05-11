import _ from 'lodash';
import { FETCH_NEWS, FETCH_SOURCES } from '../actions';

export default function(state = {}, action) {
  console.log(action.payload.data);
  switch (action.type) {
    case FETCH_NEWS:
      //return [action.payload.data, ...state];
      return { ...state, [action.payload.data.articles]: action.payload.data }
    case FETCH_SOURCES:
      return _.mapKeys(action.payload.data, 'articles');
    default:
      return state;
  }
}
