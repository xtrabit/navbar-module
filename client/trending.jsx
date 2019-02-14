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
      this.setState({trending: this.props.trending,
        suggestions: this.props.searchStrFound,
        searchStr: this.props.searchStr})
    }
  }

  getTrending() {
    if (this.props.searchStr && this.state.trending) {
      var list = this.state.trending;
    } else {
      var list = ['champion', 'guess', 'kappa', 'vans', 'dr martens'];
    }
    return list.map((item, index) => {
      return (
        <li className='navbar-trending-item' key={item + index}>
          <p>{item}</p>
        </li>
      );
    });
  }

  getSuggestion() {
    if (this.props.searchStr && this.state.suggestions) {
      var list = this.state.suggestions;
    } else {
      return null;
    }
      return <ul className='navbar-suggestions-list'>
        {list.map((item, index) => {
          return (
            <li className='navbar-suggestions-item' key={item + index}>
              <p>{item}</p>
            </li>
          );}
        )}
      </ul>
    return null;
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
