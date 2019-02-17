import React from 'react';

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
      suggestions: [],
      searchStr: ''
    };
  }

  componentDidUpdate() {
    if (this.props.searchStr !== this.state.searchStr) {
      this.setState({
        trending: this.props.trending,
        suggestions: this.props.searchStrFound,
        searchStr: this.props.searchStr
      });
    }
  }

  getTrending() {
    let list;
    if (this.props.searchStr && this.state.trending) {
      list = this.state.trending;
    } else {
      list = ['champion', 'guess', 'kappa', 'vans', 'dr martens'];
    }
    return list.map((item, index) => {
      return (
        <li className='navbar-trending-item' key={item + index.toString()}>
          <p>{item}</p>
        </li>
      );
    });
  }

  getSuggestion() {
    let list;
    if (this.props.searchStr && this.state.suggestions) {
      list = this.state.suggestions;
    } else {
      return null;
    }
    return (
      <ul className='navbar-suggestions-list'>
        {list.map((item, index) => {
          return (
            <li className='navbar-suggestions-item' key={item + index.toString()}>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className='navbar-search-trending'>
        {this.getSuggestion()}
        <h3 className='navbar-trending-header'>TRENDING</h3>
        <ul className='navbar-trending-list'>
          {this.getTrending()}
        </ul>
      </div>
    );
  }
}

export default Trending;
