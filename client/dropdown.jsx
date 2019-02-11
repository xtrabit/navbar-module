import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.new = ['Graphic Tees', 'Tops', 'Coats + Jackets', 'Bottoms', 'Shoes', 'Accessories', 'Grooming'];
    this.brands = ['Champion', 'Stussy', 'FILA', 'GUESS', 'Kappa', 'Patagonia', 'Polo Ralph Lauren', 'adidas', 'Brands A-Z'];
    this.graphictees = ['Brands + Logos', 'Music', 'Team Sports + Athletic', 'Pop Culture', 'Art + Design'];
    this.tops = ['Hoodies + Sweatshirts', 'T-Shirts', 'Shirts', 'Sweaters + Cardigans', 'Graphic Tees'];
    this.coatsjackets = ['Denim + Trucker Jackets', 'Windbreakers + Rain Jackets', 'Sherpa + Faux Fur Jackets', 'Bomber Jackets'];
    this.bottoms = ['Pants', 'Jeans', 'Track Pants + Joggers', 'Shorts + Swim'];
    this.suiting = [];
    this.shoes = ['Sneakers', 'Boots + Dress Shoes', 'Slides + Slippers', 'Nike Shoes', 'Vans Shoes'];
    this.accessories = ['Bags + Wallets', 'Hats + Beanies', 'Watches', 'Sunglasses', 'Bandanas', 'Jewelry + Pins', 'Belts', 'Tech Accessories'];
    this.socksunderwear = ['Socks', 'Underwear'];
    this.vintage = [];
    this.grooming = ['Hair Care', 'Beard + Shave', 'Cologne + Fragrance', 'Oral Care', 'Grooming Kits + Sets'];
    this.sale = ['Just Added', 'Graphic Tees', 'Tops', 'Coats + Jackets', 'Bottoms', 'Shoes', 'Accessories'];
  }

  showList(category) {
    if (this.props.show) {
      let name = category.toLowerCase().split(/\s\+\s|\s/).join('');
      if (name) {
        let list = this[name].map((item) => {
          return (
            <li key={item}>{item}</li>
          );
        });
        return (
          <ul className='navbar-lower-dropdown-menu'>
            {list}
          </ul>
        );
      }
    }
  }

  render() {
    return (
      <div className='navbar-lower-dropdown'
        onMouseEnter={this.props.cancelHide}
        onMouseLeave={this.props.hide}>
        {this.showList(this.props.name)}
      </div>
    );
  }
}

export default Dropdown;



