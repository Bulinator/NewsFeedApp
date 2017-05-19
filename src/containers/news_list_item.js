import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchNews} from '../actions';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class NewsListItem extends Component {

  // once component is rendering, fetch news from middleware
  componentDidMount() {
    this.props.fetchNews();
  }

  // render title of source (will be improved later)
  renderSource() {
    return (
      <h3> News test:</h3>
    );
  }

  // render copyright div
  renderCopyrightApi() {
    return (
      <small className="row text-muted">
        <div className="col-sm-12">
          <i>Source:
            <Link to="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
              News API
            </Link>
          </i>
          <span className="pull-right">
            <Link to="/setup">
              <FontAwesome name='cog' spin />
            </Link>
          </span>
        </div>
      </small>
    );
  }

  // add render news function but work on it later
  renderNews() {

  }

  // render component
  render() {
    return (
      <div> coucou george </div>
    )

  }
}

function mapStateToProps({news}) {
  console.log({news});
  return { news }
}

export default connect(mapStateToProps, {fetchNews})(NewsListItem);
