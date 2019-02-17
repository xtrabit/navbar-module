import React from 'react';
import Trending from './trending';
import Popular from './popular';

class Suggestions extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <div className='navbar-search-suggestions'>
          <Popular
            addItemToCart={this.props.addItemToCart}
            searchStr={this.props.searchStr}
            items={this.props.items}
            user={this.props.user}
          />
          <Trending
            searchStrFound={this.props.searchStrFound}
            searchStr={this.props.searchStr}
            trending={this.props.trending}
          />
        </div>
      );
    }
    return null;
  }
}

export default Suggestions;
