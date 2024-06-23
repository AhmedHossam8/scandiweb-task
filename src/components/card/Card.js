import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import shoppingCartIcon from '../../assets/white_shopping_cart.png';

class Card extends Component {
  handleCartClick = (e) => {
    e.stopPropagation();
    const { name, imageSrc, price, gallery, symbol } = this.props;
    this.props.onCartClick({ name, imageSrc, price, gallery });
  }

  render() {
    const { imageSrc, name, price, inStock,symbol } = this.props;

    return (
      <div className="card">
        <div className="card-image-container">
          <img src={imageSrc} alt="Product" className="card-image" />
          {!inStock && <div className="overlay">OUT OF STOCK</div>}
        </div>
        {inStock && (
          <img
            src={shoppingCartIcon}
            alt="Cart"
            className="shopping-cart-icon"
            onClick={this.onCartClick}
          />
        )}
        <div className="card-content">
          <p className="card-description">{name}</p>
          <p className={`card-price ${!inStock ? 'out-of-stock-price' : ''}`}>
            {symbol}{price}
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCartClick: PropTypes.func.isRequired,
  inStock: PropTypes.bool.isRequired,
};

export default Card;
