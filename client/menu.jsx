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
      'Wellness', 'Accessories', 'Men\'s Grooming', 'Gift Sets', 'Brands', 'Sale'
    ];
    this.sale = [
      'Women\'s Sale', 'Men\'s Sale', 'Home Sale', 'Lifestyle Sale', 'Beauty Sale'
    ];
  }

  showList(category) {
    const {show} = this.props;
    if (show) {
      const name = category.toLowerCase().split('\'').join('');
      if (name) {
        const list = this[name].map((item) => {
          return item === 'Sale'
            ? <li key={item} className='navbar-sale'>{item}</li>
            : <li key={item}>{item}</li>;
        });
        return (
          <ul className='navbar-upper-dropdown-menu'>
            {list}
          </ul>
        );
      }
    }
    return null;
  }

  render() {
    const {
      cancelHide,
      hide,
      name
    } = this.props;
    return (
      <div
        className='navbar-upper-dropdown'
        onMouseEnter={cancelHide}
        onMouseLeave={hide}
      >
        {this.showList(name)}
      </div>
    );
  }
}

export default Menu;
