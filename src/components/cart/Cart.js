import React, { Component } from 'react';
import './cart.scss';
import CartIcon from '../../assets/shopping_cart.png'

class Cart extends Component {
    render() {
        const { cartItems, isDropdownOpen, toggleDropdown } = this.props;
        const cartItemCount = cartItems.length;
        const sizes = ['XS', 'S', 'M', 'L'];
        const colors = ['grey', 'black', 'green'];
        return (
            <div className="cart-container">
                {/* <div className="cart-icon-wrapper" onClick={toggleDropdown}>
                    <img className="icon" src={CartIcon} alt="cart icon" />
                    {cartItemCount > 0 && (
                        <span className="cart-counter">{cartItemCount}</span>
                    )}
                </div>
                {isDropdownOpen && (
                    <>
                        <div className="overlay" onClick={toggleDropdown}></div>
                        <div className="dropdown-content">
                            <div className="cart-title">My Bag, {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}</div>
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <div className="cart-item-details">
                                            <p className="cart-item-name">{item.name}</p>
                                            <p className="cart-item-price">${item.price}</p>
                                            <div className="cart-item-specializations">
                                            <div className="product-info">
                        <p>SIZE:</p>
                        <div className="sizes">
                            {sizes.map(size => (
                                <div
                                    key={size}
                                    className={`size ${activeSize === size ? 'active' : ''}`}
                                    onClick={() => this.handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product-info">
                        <p>COLOR:</p>
                        <div className="colors">
                            {colors.map(color => (
                                <div
                                    key={color}
                                    className={`color ${activeColor === color ? 'active' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => this.handleColorClick(color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="product-info">
                        <p>PRICE:</p>
                        <p>${product.price}</p>
                    </div>
                                            </div>
                                        </div>
                                        <div className="quantity-control">
                                            <button onClick={() => this.handleDecrement(index)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => this.handleIncrement(index)}>+</button>
                                        </div>
                                        <img src={item.gallery[0]} alt={item.name} className="cart-item-image" />
                                    </div>
                                ))
                            ) : (
                                <p>Your cart is empty</p>
                            )}
                            <div className="cart-total">
                                Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
                            </div>
                            <button className="place-order-button">PLACE ORDER</button>
                        </div>
                    </>
                )} */}
            </div>
        );
    }
}

export default Cart;
