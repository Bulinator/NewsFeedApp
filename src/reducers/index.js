import { combineReducers } from 'redux';
import newsReducer from './news_reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  sources: (state =[], action) => action.payload || state
});

export default rootReducer;
