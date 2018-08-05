import React, { Component } from 'react';
import Header from './component/Header';
import Homepage from './component/Homepage';
import Products from './component/Products';
import Historytrans from './component/Historytrans';
import Invoice from './component/Invoice';
import Login from './component/Login';
import Logout from './component/Logout';
import ProductDetail from './component/ProductDetail';
import AddCategory from './component/AddCategory';
import EditCategory from './component/EditCategory';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Category from './component/Category';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={Login}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Logout" component={Logout}/>
      <Route path="/Homepage" component={Homepage}/>
      <Route path="/Header" component={Header}/>
      <Route path="/Products" component={Products}/>
      <Route path="/Historytrans" component={Historytrans}/>
      <Route path="/Invoice" component={Invoice}/>
      <Route path="/ProductDetail" component={ProductDetail}/>
      <Route path="/AddCategory" component={AddCategory}/>
      <Route path="/AddProduct" component={AddProduct}/>
      <Route path="/EditCategory" component={EditCategory}/>
      <Route path="/EditProduct" component={EditProduct}/>
      <Route path="/Category" component={Category}/>
      </div>
    );
  }
} export default App;