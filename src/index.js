import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import NewsList from './components/news_list';
import NewsSelection from './components/news_selection';
import reducers from './reducers';
//import Async from './middleswares/async';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/setup" component={NewsSelection} />
        <Route path="/" component={NewsList} />
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.content'));
