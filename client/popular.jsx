import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      promoItems: null
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.MY_URL}/get3randomitems`)
      .then(res => res.json())
      .then(res => this.setState({promoItems: res}))
      .catch(err => console.error(err));
  }

  componentDidUpdate() {
    if (this.props.items !== this.state.items) {
      this.setState({items: this.props.items});
    }
  }

  addToCart(e) {
    const index = e.currentTarget.className;
    if (this.state.items !== null) {
      this.props.addItemToCart(this.state.items[index]);
    } else {
      this.props.addItemToCart(this.state.promoItems[index]);
    }
  }

  renderPopularItem(items) {
    if (!items) {
      items = this.state.promoItems; // eslint-disable-line
    }
    if (items) {
      return items.map((item, index) => {
        return (
          <div
            className={index}
            key={`a${item.id}`}
            onClick={this.addToCart}
            role='presentation'
          >
            <div className='navbar-popular-item'>
              <div className='navbar-popular-item-image-container'>
                <img className='navbar-popular-item-image' src={item.image_url} alt='' />
              </div>
              <div className='navbar-popular-item-description'>
                <h3 className='navbar-popular-item-header'>{item.item_name}</h3>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className='navbar-search-popular'>
        <h3 className='navbar-popular-header'>
          {this.props.searchStr
            ? (
              <p>
                {'PRODUCT RESULTS: '}
                <span className='navbar-popular-header-search-str'>{this.props.searchStr}</span>
              </p>
            )
            : 'POPULAR PRODUCTS'}
        </h3>
        <div className='navbar-popular-container'>
          {this.renderPopularItem(this.state.items)}
        </div>
      </div>
    );
  }
}

export default Popular;
