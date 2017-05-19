import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchNews} from '../actions';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import moment from 'moment'

class NewsListItem extends Component {

  // once component is rendering, fetch news from middleware
  componentDidMount() {
    this.props.fetchNews();
  }

  // render title of source (will be improved later)
  renderHeader() {
    return (
      <div>
        <h4>News feed application</h4>
        <small>
          News source <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News api</a>
          <span className="pull-right">
            <Link to="/setup">
              <FontAwesome name='cog' spin />
            </Link>
          </span>
        </small>
      </div>
    );
  }

  // add render news function but work on it later
  renderNews() {
    //console.log(this.props.news);

    const articles = _.map(this.props.news, article => {
      return (
        <div key={article.title} className="col-xs-12 col-sm-6 col-md-4 d-flex align-items-stretch">
          <div className="card">
            <img className="card-img-top img-fluid" src={article.urlToImage} alt="image-news-source" />

            <div className="card-block">
              <div className="card-title">
                <h5><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title.substring(0,20)}</a></h5>
              </div>
              <div className="card-text text-justify">{ article.description }</div>
            </div>

            <div className="card-footer">
              Author: <i>{article.author ? article.author : 'Unknown'} - {moment(article.publishedAt).fromNow()}</i>
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
        { this.renderHeader() }
          <hr className="colorgraph" />
        { this.renderNews() }
      </div>
    );
  }
}

function mapStateToProps({news}) {
  return { news }
}

export default connect(mapStateToProps, {fetchNews})(NewsListItem);
