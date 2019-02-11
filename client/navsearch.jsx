import React from 'react';
import Suggestions from './suggestions';

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestions: false
    };
    this.showSuggestions = this.showSuggestions.bind(this);
    this.hideSuggestions = this.hideSuggestions.bind(this);
  }

  showSuggestions() {
    this.setState({showSuggestions: true});
  }

  hideSuggestions() {
    this.setState({showSuggestions: false});
  }

  render() {
    return (
      <div className='navbar-navigation-search'>
        <div className='navbar-search-anchor'>
          <form className='navbar-search-form'>
            <div className='navbar-search-wrapper'>
              <input className='navbar-search-input' type='search' onFocus={this.showSuggestions} onBlur={this.hideSuggestions}></input>
            </div>
            <div className='navbar-search-suggestions-container'>
              <Suggestions show={this.state.showSuggestions}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NavSearch;