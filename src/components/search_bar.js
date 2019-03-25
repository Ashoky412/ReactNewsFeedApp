import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.searchBox.focus();
  }

  shallowCompare(o1, o2) {
    for (let key in o1) {
      if (o1[key] !== o2[key]) {
        return true;
      }
    }
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state === nextState); // return this.shallowCompare(this.state, nextState); also does the SAME
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchTerm !== nextProps.searchTerm) {
      this.setState({ term: nextProps.searchTerm });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onNewSearch(this.state.term);
    // this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            ref={(input) => this.searchBox = input}
            value={this.state.term}
            onChange={(event) => this.setState({ term: event.target.value })}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
