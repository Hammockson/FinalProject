import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom';

const cookies = new Cookies();

class Header extends Component {
  state = {
    datauser : ''
  }

  componentDidMount(){
    var mycookie = cookies.get('sessioniduser');
    axios.post('http://localhost:8002/TotalCartHeader', {
        iduser : mycookie
        })
        .then((getData) => {
          this.setState({
            datauser: getData.data
          })
        })
}

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
                <a href="/ProductList" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
              </li>
              {/* <li><a href="#">Store Location</a></li> */}
              <div className="btn-group">
              <Link to="/Cart" type="button" className="btn animico-btnc animico-txt4" style={{marginRight: 10}}>
                  <img src="img/Icon/shopping-cart.png" style={{width: 20, height: 20}} />   
                  <span className="animico-txt1b badge anim-badge badge-warning">{this.state.datauser}</span>
                </Link>
              </div>
              <div className="btn-group">
                <button type="button" className="btn animico-btnc animico-txt5b dropdown-toggle animico-txt5" data-toggle="dropdown" style={{marginRight: 10}}>
                  <img src="img/Icon/user.png" style={{width: 20, height: 20}} />
                </button>
                <ul className="dropdown-menu anim-dropdown-menu animico-txt2b" role="menu">
                  <li><a href="/Profile">View Profile</a></li>
                  <li><Link to="/Logout">Log Out</Link></li>
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