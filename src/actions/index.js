import _ from 'lodash';
import axios from 'axios';
import { API_KEY } from '../config/config';
import { FETCH_NEWS, FETCH_SOURCES } from './types';

const ROOT_URL = `https://newsapi.org/v1/articles`;
const SRC_URL = 'https://newsapi.org/v1/sources?language=en';

export function fetchNews(sources) {
  const request = sources.map(source => axios.get(`${ROOT_URL}?source=${source}&apiKey=${API_KEY}`));

  // need to use promise when it's an array of object
  return (dispatch) => {
    Promise.all(request)
    .then((data) => {
      dispatch({ type: FETCH_NEWS, payload: data });
    })
    .catch((error) => {
      console.log("Error in thunk fetchNews: ", error);
    });
  }
}

export function fetchSource() {
  const request = axios.get(`${SRC_URL}`);

  return (dispatch) => {
    request
    .then(({data}) => {
      dispatch({type: FETCH_SOURCES, payload: data})
    });
  }
}
