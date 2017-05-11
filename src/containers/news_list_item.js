import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
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
      <h3> News:
        <span className="text-muted">{this.props.news.source}</span>
      </h3>
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
  }

  // render component
  render() {
    const { news } = this.props;

    return (
      <div className="news-list-item">
        { this.renderSource() }
        { this.renderCopyrightApi() }
        { this.renderNews() }
      </div>
    );
  }
}

function mapStateToProps({ news }, ownProps) {
  return { news }
}

export default connect((state=>state), {fetchNews})(NewsListItem);
