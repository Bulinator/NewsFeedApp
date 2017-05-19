import _ from 'lodash';
import { FETCH_NEWS, FETCH_SOURCES } from '../actions';

export default function(state = {}, action) {

console.log(action);
  switch (action.type) {
    case FETCH_NEWS:
      console.log('action',action.payload);
      //return action.payload;
      console.log(action);
      //return action.payload.data;
      //return action.payload
      return action.payload.data;
    case FETCH_SOURCES:
      return _.mapKeys(action.payload.data, 'articles');
    default:
      return state;
  }
}
