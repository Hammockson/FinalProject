import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link to="Homepage" className="navbar-brand">ANIMICO.admin</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/Homepage" className="nav-link">Dashboard <span className="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All Products
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/Category" class="dropdown-item" >Category</Link>
                    <Link to="/Products" class="dropdown-item" >Products</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/Historytrans" className="nav-link">History</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
              <ul className="navbar-nav navbar-right">
                {/* <li className="nav-item">
                  <p className="nav-link">Esa Adama <span className="sr-only"></span></p>
                </li> */}
                <li className="nav-item">
                  <Link to="/Logout" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>
          </nav>

        
    
        );
    }
}

export default Header;