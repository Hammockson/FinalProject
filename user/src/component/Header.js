import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            
      <div className="container-fluid">
    
      <nav className="navbar navbar-inverse navbar-fixed-top animico-txt3b">
        <div className="container">
       
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="/Homepage" className="navbar-brand" >Animico</a>
          </div>
          
          <div className="collapse navbar-collapse" id="navbar-collapse-3">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/Homepage">Home</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories<span className="caret" /></a>
                <ul className="dropdown-menu anim-dropdown-menu animico-txt2b">
                  <li><a href="/ProductList">New Arrivals</a></li>
                  <li role="separator" className="divider" />
                  <li><a href="/ProductList">T-Shirt</a></li>
                  <li><a href="/ProductList">Hoodie</a></li>
                  <li><a href="/ProductList">Backpack</a></li>
                  <li role="separator" className="divider" />
                  <li><a href="/ProductList">All Products</a></li>
                </ul>
              </li>
              <li><a href="#">Store Location</a></li>
              <div className="btn-group">
                <button type="button" className="btn animico-btnc dropdown-toggle animico-txt4" data-toggle="dropdown" style={{marginRight: 10}}>
                  <img src="img/Icon/shopping-cart.png" style={{width: 20, height: 20}} />   
                  <span className="animico-txt1b badge anim-badge badge-warning">2</span>
                </button>
                <ul className="dropdown-menu anim-dropdown-menu animico-txt2b" role="menu" style={{textAlign: 'center'}}>
                  <p>Animico Backpack A Black</p>
                  <p>IDR 200.000</p>
                  <li className="divider" />
                  <p>Animico T-Shirt Whale</p>
                  <p>IDR 120.000</p>
                  <li className="divider" />
                  <p>Total IDR 320.000</p>
                  <a href="Cart"><button type="button" className="btn animico-btnc animico-txt5">Cart</button></a>
                  <a href="Checkout"><button type="button" className="btn animico-btnc animico-txt5">Checkout</button></a>  
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn animico-btnc animico-txt5b dropdown-toggle animico-txt5" data-toggle="dropdown" style={{marginRight: 10}}>
                  <img src="img/Icon/user.png" style={{width: 20, height: 20}} />
                </button>
                <ul className="dropdown-menu anim-dropdown-menu animico-txt2b" role="menu">
                  <li><a href="/Profile">View Profile</a></li>
                  <li><a href="/Login">Log Out</a></li>
                </ul>
              </div>
              <li>
                <a className="btn btn-default btn-outline btn-square" data-toggle="collapse" href="#nav-collapse3" aria-expanded="false" aria-controls="nav-collapse3">Search</a>
              </li>
            </ul>
            <div className="collapse nav navbar-nav nav-collapse" id="nav-collapse3">
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control square" placeholder="Search" />
                </div>
                <button type="submit" className="btn animico-btn square "><span className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
        );
    }
}

export default Header;