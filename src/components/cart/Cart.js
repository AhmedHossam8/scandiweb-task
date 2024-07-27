import React, { Component } from 'react';
import './cart.scss';
import CartIcon from '../../assets/shopping_cart.png';
import { connect } from 'react-redux';
import Selector from '../productSelector/Selector';
import { updateCartItems } from '../../redux/slices/cartItemsSlice';

class Cart extends Component {
    handleIncrement = (product) => {
        const { cartItems, updateCartItems } = this.props
        let newCartItems = []
        cartItems.map(c => {
            let p = { ...c }
            if (c.id === product.id) {
                p.quantity = c.quantity + 1;
            }
            newCartItems.push(p)
        })
        updateCartItems(newCartItems)
    };

    handleDecrement = (product) => {
        const { cartItems, updateCartItems } = this.props
        let newCartItems = []
        cartItems.map(c => {
            let p = { ...c }
            if (c.id === product.id) {
                p.quantity = c.quantity === 0 ? c.quantity : c.quantity - 1;
            }
            if (p.quantity > 0)
                newCartItems.push(p)
        })
        updateCartItems(newCartItems)
    };

    handlePlaceOrder = () =>{
        const { toggleDropdown } = this.props;
        window.alert("Order Placed Successfully");
        toggleDropdown()
    }

    render() {
        const { cartItems, isDropdownOpen, toggleDropdown } = this.props;
        const cartItemCount = cartItems.length;
        return (
            <div className="cart-container">
                <div className="cart-icon-wrapper" onClick={toggleDropdown}>
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
                                            <p className="cart-item-price">${item.prices[0]?.amount}</p>
                                            <div className="cart-item-specializations">
                                                <div className="product-info">
                                                    <Selector
                                                        handleAttributeClick={this.handleAttrClick}
                                                        attributes={item?.attributes}
                                                        disableOptions={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity-control">
                                            <div className='index-button' onClick={() => this.handleIncrement(item)}>+</div>
                                            <span>{item.quantity}</span>
                                            <div className='index-button' onClick={() => this.handleDecrement(item)}>-</div>
                                        </div>
                                        <img src={item.gallery[0]} alt={item.name} className="cart-item-image" />
                                    </div>
                                ))
                            ) : (
                                <p>Your cart is empty</p>
                            )}
                            <div className="cart-total">
                                Total: ${cartItems.reduce((total, item) => total + item.prices[0]?.amount * item.quantity, 0)}
                            </div>
                            <button className="place-order-button" onClick={this.handlePlaceOrder}>
                                PLACE ORDER
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItems.cartItems
});
const mapDispatchToProps = {
    updateCartItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
