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
          <Popular user={this.props.user}/>
          <Trending />
        </div>
      );
    }
    return null;
  }
}

export default Suggestions;