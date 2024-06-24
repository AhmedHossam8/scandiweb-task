import React, { Component } from 'react';
import './navbar.scss';
// import { config } from '../../config/config';
import Cart from '../cart/Cart';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { fetchCategories, fetchCategoryByName } from '../../redux/actions/categoryActions';
import { updateProducts, updateSelectedCategory } from '../../redux/slices/selectedCategorySlice';
import { fetchProductByCategory, fetchProducts } from '../../redux/actions/productActions';
import { updateProductsToView } from '../../redux/slices/productsToViewSlice';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false,
        };
    }
    componentDidMount(){
        const { fetchCategories } = this.props;
        fetchCategories();
    }
    toggleDropdown = () => {
        this.setState((prevState) => ({ isDropdownOpen: !prevState.isDropdownOpen }));
    };
    async changeProductsByCategory(category){
        const {fetchProductByCategory, updateSelectedCategory, fetchProducts, products} = this.props
        fetchProductByCategory(category);
        updateSelectedCategory(category);

    }
    componentDidUpdate() {
        const { productsByCategory, updateProductsToView } = this.props;

        if(productsByCategory && productsByCategory.length > 0){
            updateProductsToView(productsByCategory)
        }
    }
    render() {
        const { cartItems, categories } = this.props;
        return (
            <>
                {this.state.isDropdownOpen && <div className="overlay" onClick={this.toggleDropdown}></div>}
                <nav className="navbar">
                    <div className="left-section">

                        {categories?.map((link) => (
                            <Link to={"/"}>
                                <a
                                
                                    key={link.name}
                                    href={link.name}
                                    className={`left-text ${this.props.activeIndex === link.id ? 'active' : ''}`}
                                    onClick={() => this.changeProductsByCategory(link.name)}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className="logo">
                        <img src="https://headless-security.org/gfx/logo.png" alt="Logo" />
                    </div>
                    <div className="right-section">
                        <Cart isDropdownOpen={this.state.isDropdownOpen} toggleDropdown={this.toggleDropdown} />
                    </div>
                </nav>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    categories: state.category.category,
    loading: state.category.loading,
    error: state.category.error,
    productsByCategory: state.productsByCategory.products,
    products: state.products.products
  });
  
  const mapDispatchToProps = {
    fetchProductByCategory,
    fetchCategoryByName,
    fetchCategories,
    updateSelectedCategory,
    updateProductsToView,
    fetchProducts
  };
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);