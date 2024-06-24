import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProductListing from './pages/productListing/ProductListing';
import ProductInfo from './pages/productInfo/ProductInfo';
//import { config, product } from './config/config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      title: "",
      products: [],
      cartItems: []
    };
  }

  componentDidMount() {
    this.setTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex !== this.state.activeIndex) {
      this.setTitle();
    }
  }

  setTitle() {
    //const title = config.links.find(link => link.id === this.state.activeIndex)?.name || "";
    const title = "ajksdh"
    this.setState({ title });
  }

  handleLinkClick = (index) => {
    this.setState({ activeIndex: index });
  }

  handleAddToCart = (product) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, product]
    }));
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar
          activeIndex={this.state.activeIndex}
          handleLinkClick={this.handleLinkClick}
        />
        <Switch>
          <Route exact path="/">
            <ProductListing
                  title={this.state.title}
                  handleCardClick={this.handleCardClick}
            />
            </Route>
            <Route path="/product/:id">
              <ProductInfo
                handleAddToCart={this.handleAddToCart}
              />
            </Route>
        </Switch>
        
        
      </div>
      </Router>
    );
  }
}

export default App;