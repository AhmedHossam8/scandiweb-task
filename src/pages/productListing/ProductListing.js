import React, { Component } from 'react';
import Card from '../../components/card/Card';
import './product_listing.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';
import { updateProductsToView } from '../../redux/slices/productsToViewSlice';
class ProductListing extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  componentDidUpdate(){
    const { products, updateProductsToView, productsByCategory } = this.props;
    if(productsByCategory && productsByCategory.length > 0){
      updateProductsToView(productsByCategory)
    }
    else if(products && products.length >=0)
    updateProductsToView(products);

  }
  render() {
    const { loading, error, productsToView, selectedCategory } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
      <div>
        <div className='page-title'><h1>{selectedCategory}</h1></div>
        <div className="card-container">
          {productsToView.map((item, index) => (
           <Link to={`/product/${item.id}`}>
              <Card
                key={index}
                imageSrc={item?.gallery[0]}
                name={item.name}
                price={item?.prices[0].amount}
                inStock={item.inStock}
                symbol={item?.prices[0]?.currency?.symbol}
                onCartClick={this.handleCardClick}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.productsByCategory.loading,
  error: state.productsByCategory.error,
  products: state.products.products,
  productsToView: state.productsToView.products,
  productsByCategory: state.productsByCategory.products,
  selectedCategory: state.selectedCategory.selectedCategory
});

const mapDispatchToProps = {
  fetchProducts,
  updateProductsToView
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);