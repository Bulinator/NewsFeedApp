import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  news: (state = [], action) => action.payload || state,
  sources: (state =[], action) => action.payload || state
});

export default rootReducer;
