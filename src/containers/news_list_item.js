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
    //console.log(this.props.news);

    const articles = _.map(this.props.news, article => {
      return (
        <div key={article.title} className="col-sm-12 col-md-4 d-flex align-items-stretch">
          <div className="card">
            <img className="card-img-top" src={article.urlToImage} alt="image-news-source" />
            <div className="card-block">
              <div className="card-title">
                <h5><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h5>
              </div>
              <div className="card-text text-justify">{ article.description }</div>
            </div>
          <div className="card-footer">
            {article.author}
          </div>
          </div>
        </div>
      );
    });

    return (
      <div className="row mt-3">
      { articles }
      </div>
    );


  }

  // render component
  render() {
    //console.log(this.props.news);

    return (
      <div>
        <h4>News feed application</h4>
        <small>
        News source <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News api</a>
        <span className="pull-right">
          <Link to="/settings">
            <FontAwesome name='cog' spin />
          </Link>
        </span>
        </small>
        { this.renderNews() }
      </div>
    );
  }
}

function mapStateToProps({news}) {
  return { news }
}

export default connect(mapStateToProps, {fetchNews})(NewsListItem);
