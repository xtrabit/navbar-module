import React from 'react';
import Trending from './trending';
import Popular from './popular';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.show) {
      return (
        <div className='navbar-search-suggestions'>
          <Popular user={this.props.user}
            addItemToCart={this.props.addItemToCart}
            items={this.props.items}
            searchStr={this.props.searchStr}
            />
          <Trending searchStrFound={this.props.searchStrFound}
            trending={this.props.trending}
            searchStr={this.props.searchStr}/>
        </div>
      );
    }
    return null;
  }
}

export default Suggestions;