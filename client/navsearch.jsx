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
    this.addHideSuggestionsListener = this.addHideSuggestionsListener.bind(this);
    this.removeHideSuggestionsListener = this.removeHideSuggestionsListener.bind(this);
  }

  showSuggestions() {
    this.expandSearch();
    this.setState({showSuggestions: true});
  }

  hideSuggestions(e) {
    this.contractSearch();
    this.setState({showSuggestions: false});
    document.removeEventListener('click', this.hideSuggestions);
  }

  expandSearch() {
    document.querySelector('.navbar-search-icon').style.setProperty('fill', '#222');
    const element = document.querySelector('.navbar-search-wrapper');
    element.style.setProperty('border-bottom-color', '#fff');

    const first = element.getBoundingClientRect();
    element.style.setProperty('width', '200px');
    const last = element.getBoundingClientRect();
    const deltaX = first.left - last.left;
    const deltaW = first.width / last.width;

    element.animate([{
      transformOrigin: 'top left',
      transform: `translate(${deltaX}px, 0) scale(${deltaW}, 1)`
    }, {
      transformOrigin: 'top left',
      transform: 'none'
    }], {
      duration: 200,
      easing: 'ease-in-out',
      fill: 'both'
    });
  }

  contractSearch() {
    document.querySelector('.navbar-search-icon').style.setProperty('fill', '#aaa');
    const element = document.querySelector('.navbar-search-wrapper');
    element.style.setProperty('border-bottom-color', '#ddd');

    const first = element.getBoundingClientRect();
    element.style.setProperty('width', '127px');
    const last = element.getBoundingClientRect();
    const deltaX = first.left - last.left;
    const deltaW = first.width / last.width;

    element.animate([{
      transformOrigin: 'top left',
      transform: `translate(${deltaX}px, 0) scale(${deltaW}, 1)`
    }, {
      transformOrigin: 'top left',
      transform: 'none'
    }], {
      duration: 200,
      easing: 'ease-in-out',
      fill: 'both'
    });
  }

  focusInput() {
    document.getElementsByClassName('navbar-search-input')[0].focus();
  }

  showMagnifier() {
    document.querySelector('.navbar-search-icon').style.setProperty('fill', '#222');
  }

  hideMagnifier() {
    document.querySelector('.navbar-search-icon').style.setProperty('fill', '#aaa');
  }

  addHideSuggestionsListener() {
    if (this.state.showSuggestions) {
      document.addEventListener('click', this.hideSuggestions);
    }
  }

  removeHideSuggestionsListener() {
    if (this.state.showSuggestions) {
      document.removeEventListener('click', this.hideSuggestions);
    }
  }

  render() {
    return (
      <div className='navbar-navigation-search'>
        <div className='navbar-search-anchor'>
          <form className='navbar-search-form'
            onMouseEnter={this.removeHideSuggestionsListener}
            onMouseLeave={this.addHideSuggestionsListener}>
            <div className='navbar-search-wrapper'
              onClick={this.focusInput}
              onMouseOver={this.showMagnifier}
              onMouseLeave={this.hideMagnifier}>
              <svg className='navbar-search-icon'>
                <title id='navbar-search-button'>Search</title>
                <path d="M4.082 12.75a6.935 6.935 0 0 1-2.127-1.438A6.657 6.657 0 0 1 .52 9.203 6.42 6.42 0 0 1 0 6.625a6.425 6.425 0 0 1 .52-2.578A6.686 6.686 0 0 1 4.082.516 6.58 6.58 0 0 1 6.683 0 6.696 6.696 0 0 1 9.3.516a6.499 6.499 0 0 1 2.128 1.421 7.038 7.038 0 0 1 1.435 2.11 6.271 6.271 0 0 1 .536 2.578 6.267 6.267 0 0 1-.536 2.578 7.02 7.02 0 0 1-1.435 2.11A6.694 6.694 0 0 1 9.3 12.75a6.518 6.518 0 0 1-2.616.531 6.405 6.405 0 0 1-2.6-.53zM2.695 2.672A5.364 5.364 0 0 0 1.04 6.625a5.364 5.364 0 0 0 1.655 3.953 5.46 5.46 0 0 0 3.988 1.64 5.459 5.459 0 0 0 3.988-1.64 5.364 5.364 0 0 0 1.655-3.953 5.364 5.364 0 0 0-1.655-3.953 5.459 5.459 0 0 0-3.988-1.64 5.46 5.46 0 0 0-3.988 1.64zm12.578 13.281a.38.38 0 0 1-.173-.14l-3.877-4.375a.575.575 0 0 1-.127-.375.392.392 0 0 1 .19-.344.498.498 0 0 1 .725.031l3.877 4.375a.607.607 0 0 1 .11.39.56.56 0 0 1-.173.36.404.404 0 0 1-.158.094.612.612 0 0 1-.189.031.524.524 0 0 1-.205-.047z"/>
              </svg>
              <input className='navbar-search-input' type='search' placeholder='Search'
                onFocus={this.showSuggestions}></input>
            </div>
            <div className='navbar-search-suggestions-container'>
              <Suggestions show={this.state.showSuggestions}
                user={this.props.user}
                addItemToCart={this.props.addItemToCart}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NavSearch;