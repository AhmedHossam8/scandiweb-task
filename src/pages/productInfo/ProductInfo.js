import React, { Component } from 'react';
import './product_info.scss';
import { withRouter } from 'react-router-dom';
import Selector from '../../components/productSelector/Selector'
import { connect } from 'react-redux';
import { fetchProductById } from '../../redux/actions/productActions';
class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImageIndex: 0,
            currentIndex: 0,
            product: {}
        };
    }
    componentDidMount(){
        const {id} = this.props.match.params
        const { fetchProductById } = this.props;

        fetchProductById(id);
        
    };
    handleImageSelect = (index) => {
        this.setState({ selectedImageIndex: index, currentIndex: index });
    };

    handleNextImage = () => {
        this.setState((prevState, props) => {
            const newIndex = (prevState.currentIndex + 1) % JSON.parse(props.product.gallery).length;
            return {
                currentIndex: newIndex,
                selectedImageIndex: newIndex
            };
        });
    };

    handlePrevImage = () => {
        this.setState((prevState, props) => {
            const newIndex = (prevState.currentIndex - 1 + JSON.parse(props.product.gallery).length) % JSON.parse(props.product.gallery).length;
            return {
                currentIndex: newIndex,
                selectedImageIndex: newIndex
            };
        });
    };

    handleAddToCart = () => {
        const { product, handleAddToCart } = this.props;
        const { activeColor, activeSize } = this.state

        if (activeSize && activeColor) {
            handleAddToCart({
                ...product,
                size: activeSize,
                color: activeColor
            });
        } else {
            alert('Please select a size and color');
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
        const { product, loading, error } = this.props;
        console.log(product)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
        return product && product.gallery ? (
            <div className="product-page">
                <div className="small-images">
                    {JSON.parse(product?.gallery)?.map((image, index) => (
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
                    <img src={JSON.parse(product.gallery)[selectedImageIndex]} alt="Product" className='product-image' />
                    <button className="arrow right-arrow" onClick={this.handleNextImage}>&gt;</button>
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>

                    <div className="product-info">
                        <Selector 
                            activeColor={this.state.activeColor} 
                            activeSize={this.state.activeSize}
                            attributes={JSON.parse(product?.attributes)}
                            handleColorClick={this.handleColorClick}
                            handleSizeClick={this.handleSizeClick}
                        />
                    </div>

                    <div className="product-info">
                        <p>PRICE:</p>
                        <p>${product.price}</p>
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
  });
  
const mapDispatchToProps = {
    fetchProductById,
};
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductInfo));