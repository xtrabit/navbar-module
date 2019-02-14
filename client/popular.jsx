import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:3001/get3randomitems`)
    .then(res => res.json())
    .then(res => this.setState({items: res}))
    .catch((err) => console.error(err));
  }

  addToCart(e) {
    let index = e.currentTarget.className;
    this.props.addItemToCart(this.state.items[index]);
  }

  renderPopularItem() {
    if (this.state.items) {
      return this.state.items.map((item, index) => {
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
          <h3 className='navbar-popular-header'>POPULAR PRODUCTS</h3>
          <div className='navbar-popular-container'>
            {this.renderPopularItem()}
          </div>
        </div>
      );
  }
}

export default Popular;