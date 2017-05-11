import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import FontAwesome from 'react-fontawesome';

class NewsSelection extends Component {

  constructor(props) {
    super(props);
    this.state = { items: []};
    this.onSourceSelect = this.onSourceSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSource();
  }

  // update array of source
  onSourceSelect(source) {
    this.setState({items: this.state.items.concat(source.source.id) });
  }

  onSubmit() {
    this.props.fetchNews(this.state.items);
    this.props.history.push('/');
  }

  renderSource() {
    return _.map(this.props.sources.sources, source => {
      return (
        <div
          className="col-sm-12 col-md-4 d-flex align-items-stretch"
          key={source.id}
          onClick={this.onSourceSelect.bind(this, {source})}
        >
          <div className="card">
            <div className="card-header text-primary">
              { source.name }
              <small className="text-muted pull-right">
                [{ source.language.toUpperCase() }]
                -
                [{ source.country.toUpperCase() }]
              </small>
            </div>
            <div className="card-block">
              <div className="card-text text-muted">
                { source.description }
              </div>
            </div>
            <div className="card-footer">
              Category: <span className="text-muted">{ source.category }</span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { sources } = this.props;

    if (!sources) {
      return <div>Loading</div>;
    }

    return (
      <div className="news-selection">
        <h6>
          <FontAwesome className='title-icon' name='cog' />
          Select news source
          <span className="pull-right">
              <button onClick={this.onSubmit.bind(this)} className="btn btn-sm btn-default">
                View news selected
              </button>
          </span>
        </h6>
        <div className="row mt-4">
          { this.renderSource() }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ sources }) {
  return { sources }
}

//return bindActionCreators({ fetchNews },dispatch);
// return { fetchNews }; => make fetchnews available in component as this.props.fetchNews
function mapDispatchToProps(dispatch) {
  return { fetchNews };
}

export default connect((state=>state),actions)(NewsSelection);
