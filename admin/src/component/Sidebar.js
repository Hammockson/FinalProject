import React, { Component } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav id="sidebar">
            <div className="sidebar-header" style={{textAlign: 'center'}}>
                <img src="images/logo5.png" />
            </div>
            <div style={{margin: 30, textAlign: 'center'}}>
                <h4>Esa Adama</h4>
                <a href="/Homepage"><button className="btn btn-grey">Edit Profile</button></a>
            </div>
            <ul className="list-unstyled components">
                <li>
                <a href="/Homepage">Dashboard</a>
                </li>
                <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">All Products</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                    <a href="/Category">Categories</a>
                    </li>
                    <li>
                    <a href="/Products">Products</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="/Invoice">Invoices</a>
                </li>
            </ul>
            <ul className="list-unstyled components">
                <li>
                <a href="/Logout">Logout</a>
                </li>
            </ul>
            </nav>

      </div>
    )
  }
}

export default Sidebar