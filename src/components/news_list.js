import React, { Component } from 'react';

import NewsListItem from '../containers/news_list_item';

class NewsList extends Component {
  render() {
    return (
      <div className="news-list">
        <NewsListItem />
      </div>
    );
  }
}

export default NewsList;
