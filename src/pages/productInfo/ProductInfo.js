import React, { Component } from 'react';
import './product_info.scss';
import { withRouter } from 'react-router-dom';
import Selector from '../../components/productSelector/Selector'
import { connect } from 'react-redux';
import { fetchProductById } from '../../redux/actions/productActions';
import cartItemsSlice, { updateCartItems } from '../../redux/slices/cartItemsSlice';
class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImageIndex: 0,
            currentIndex: 0,
            product: {}
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params
        const { fetchProductById } = this.props;
        fetchProductById(id);

    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.product?.id !== this.props.product?.id) {
            this.setState({ product: this.props.product })
        }
    }
    handleImageSelect = (index) => {
        this.setState({ selectedImageIndex: index, currentIndex: index });
    };

    handleNextImage = () => {
        this.setState((prevState, props) => {
            const newIndex = (prevState.currentIndex + 1) % props.product.gallery.length;
            return {
                currentIndex: newIndex,
                selectedImageIndex: newIndex
            };
        });
    };

    handlePrevImage = () => {
        this.setState((prevState, props) => {
            const newIndex = (prevState.currentIndex - 1 + props.product.gallery.length) % props.product.gallery.length;
            return {
                currentIndex: newIndex,
                selectedImageIndex: newIndex
            };
        });
    };

    handleAttrClick = (attributes) => {
        const { product } = this.props;
        const tempProduct = { ...product, attributes };
        this.setState({ product: tempProduct });
    }

    handleAddToCart = () => {
        const { handleAddToCart, cartItems, updateCartItems } = this.props;
        const {product} = this.state
        const allAttributesSelected = false;
        const attributesWithSelections = []
        product?.attributes?.forEach(attr => {
            attr.items?.forEach(item => {
                if(item.selected) attributesWithSelections.push(attr)
            })
        });

        if (attributesWithSelections.length === product?.attributes.length) {
            handleAddToCart({
                ...product,
                attributes: product.attributes
            });
            updateCartItems([...cartItems, {...product, quantity: 1}]);
        } else {
            alert("Please select your preferences.");
        }
    };
    handleSizeClick = (size) => {
        this.setState({ activeSize: size });
    };

    handleColorClick = (color) => {
        this.setState({ activeColor: color });
    };
    render() {
        const { selectedImageIndex, activeSize, activeColor } = this.state;
        const { loading, error } = this.props;
        const { product } = this.state

        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        return product && product.gallery ? (
            <div className="product-page">
                <div className="small-images">
                    {product?.gallery?.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Small ${index + 1}`}
                            className="small-image"
                            onClick={() => this.handleImageSelect(index)}
                        />
                    ))}
                </div>
                <div className="product-image-div">
                    <button className="arrow left-arrow" onClick={this.handlePrevImage}>&lt;</button>
                    <img src={product.gallery[selectedImageIndex]} alt="Product" className='product-image' />
                    <button className="arrow right-arrow" onClick={this.handleNextImage}>&gt;</button>
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>

                    <div className="product-info">
                        <Selector
                            handleAttributeClick={this.handleAttrClick}
                            attributes={product?.attributes}
                        />
                    </div>

                    <div className="product-info">
                        <p>PRICE:</p>
                        <p>${product.prices[0]?.amount}</p>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />

                    </div>
                    <button className="product-button" onClick={this.handleAddToCart}>ADD TO CART</button>
                </div>
            </div>
        ) : (
            <div>Product not found.</div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.product.product,
    loading: state.product.loading,
    error: state.product.error,
    cartItems: state.cartItems.cartItems
});

const mapDispatchToProps = {
    fetchProductById,
    updateCartItems
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductInfo));