import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Homepage from './component/Homepage';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Profile from './component/Profile';
import EditProfile from './component/EditProfile';
import Invoice from './component/Invoice';
import Register from './component/Register';
import Login from './component/Login';
import ProductDetail from './component/ProductDetail';
import ProductDetailWishlist from './component/ProductDetailWishlist';
import ProductList from './component/ProductList';
import { Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Homepage" component={Homepage}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Cart" component={Cart}/>
      <Route path="/Checkout" component={Checkout}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/EditProfile" component={EditProfile}/>
      <Route path="/Invoice" component={Invoice}/>
      <Route path="/ProductDetailWishlist" component={ProductDetailWishlist}/>
      <Route path="/ProductDetail" component={ProductDetail}/>
      <Route path="/ProductList" component={ProductList}/>
      </div>
    );
  }
} export default App;