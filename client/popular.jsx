import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      promoItems:null
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3001/get3randomitems`)
    .then(res => res.json())
    .then(res => this.setState({promoItems: res}))
    .catch((err) => console.error(err));
  }

  componentDidUpdate() {
    if (this.props.items !== this.state.items) {
      this.setState({items: this.props.items});
    }
  }

  addToCart(e) {
    let index = e.currentTarget.className;
    this.props.addItemToCart(this.state.items[index]);
  }

  renderPopularItem(items) {
    if ((!items || !(items && items.length)) || !this.props.searchStr) {
      items = this.state.promoItems;
    }
    if (items) {
      return items.map((item, index) => {
        return (
          <div className={index} key={'a' + item.id}
            onClick={this.addToCart}>
            <div className='navbar-popular-item'>
              <div className='navbar-popular-item-image-container'>
                <img className='navbar-popular-item-image'src={item.image_url}></img>
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
          <h3 className='navbar-popular-header'>{this.props.searchStr ? (<p>PRODUCT RESULTS: <span className='navbar-popular-header-search-str'>{this.props.searchStr}</span></p>) : 'POPULAR PRODUCTS'}</h3>
          <div className='navbar-popular-container'>
            {this.renderPopularItem(this.state.items)}
          </div>
        </div>
      );
  }
}

export default Popular;