import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.womens = [
      'New', 'Dresses + Rompers', 'Tops', 'Coats + Jackets', 'Bottoms', 'Intimates',
      'Swim', 'Vintage', 'Beauty', 'Accessories', 'Shoes', 'Brands', 'Sale'
    ];
    this.mens = [
      'New', 'Brands', 'Graphic Tees', 'Tops', 'Coats + Jackets', 'Bottoms', 'Suiting',
      'Shoes', 'Accessories', 'Socks + Underwear', 'Vintage', 'Grooming', 'Sale'
    ];
    this.home = [
      'New', 'Bedding', 'Furniture', 'Art + Décor', 'Rugs + Curtains', 'Lighting',
      'Kitchen + Bar', 'Bath', 'Vintage', 'Sale'
    ];
    this.lifestyle = [
      'New', 'Vinyl + Cassettes', 'Audio', 'Cameras + Film', 'Phone + Tech',
      'Books + Stationery', 'Fun + Games', 'Pets', 'Wellness', 'Skateboarding', 'Sale'
    ];
    this.beauty = [
      'New', 'Makeup', 'Skin Care', 'Perfume + Fragrance', 'Bath + Body', 'Hair', 'Nails',
      'Wellness', 'Accessories', 'Men\'s Grooming', 'Gift Sets', 'Brands','Sale'
    ];
    this.sale = [
      'Women\'s Sale', 'Men\'s Sale', 'Home Sale', 'Lifestyle Sale', 'Beauty Sale'
    ];
  }

  showList(category) {
    if (this.props.show) {
      let name =category.toLowerCase().split('\'').join('');
      console.log('MENU NAME',name);
      if (name) {
        let list = this[name].map((item) => {
          return (
            item === 'Sale'
            ? <li key={item} className='navbar-sale'>{item}</li>
            : <li key={item}>{item}</li>
          );
        });
        return (
          <ul className='navbar-upper-dropdown-menu'>
            {list}
          </ul>
        );
      }
    }
  }

  render() {
    return (
      <div className='navbar-upper-dropdown'
        onMouseEnter={this.props.cancelHide}
        onMouseLeave={this.props.hide}>
        {this.showList(this.props.name)}
      </div>
    );
  }
}

export default Menu;

