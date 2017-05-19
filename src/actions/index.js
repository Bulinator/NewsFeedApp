import _ from 'lodash';
import axios from 'axios';
import { API_KEY } from '../config/config';
import { FETCH_NEWS, FETCH_SOURCES } from './types';


const ROOT_URL = `https://newsapi.org/v1/articles`;
const SRC_URL = 'https://newsapi.org/v1/sources?language=en';

export function fetchNews(sources) {
  return function(dispatch) {
    // check if sources is empty
    //(!sources) ? sources = ['talksport','cnn'] : sources = sources;

    sources = sources ? sources : ['the-guardian-uk','talksport','techcrunch','fortune'];
    sources.map(source => axios.get(`${ROOT_URL}?source=${source}&apiKey=${API_KEY}`)
      .then(response => {
        dispatch({type: FETCH_NEWS, payload: response.data});
      })
      .catch(() => {
        console.log('API NOT AVAILABLE');
      })
    );
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
