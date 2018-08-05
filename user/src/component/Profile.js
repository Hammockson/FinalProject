import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
// import AvatarRound from '../img/101.png'
import { Link } from 'react-router-dom';



class Profile extends Component {
    render() {
        return (
            <div>
                <Header />

                <div style={{marginTop: 100, marginBottom: 100}}>
                    <div className="container" style={{backgroundColor: '#27282c'}}>
                        <div className="col-md-3">
                        <img src="img/101.png" style={{padding: 50}} />
                        </div>
                        <div className="col-md-6">
                        <h3 className="animico-txt4b">ESA ADAMA</h3>
                        <p className="animico-txt2b">j.esa.adama@gmail.com</p>
                        <p className="animico-txt2b">+62 81298799023</p>
                        <p className="animico-txt2b">INDONESIA</p>
                        <hr />
                        <span className="anim-badge2 animico-txt3b" style={{padding: 10}}>PREMIUM MEMBER</span>
                        </div>
                        <div className="col-md-3" style={{textAlign: 'center', marginTop: 100}}>
                        <a href="/EditProfile" className="btn animico-btnc animico-txt1">EDIT PROFILE</a>
                        </div>
                    </div>
                    <div className="container animico-txt5" style={{paddingTop: 40}}>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="tabbable-panel">
                                <div className="tabbable-line">
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                    <a href="#tab_default_1" data-toggle="tab">
                                        Wishlist </a>
                                    </li>
                                    <li>
                                    <a href="#tab_default_2" data-toggle="tab">
                                        Transaction History </a>
                                    </li>
                                </ul>
                                <div className="tab-content" style={{marginTop: 50}}>
                                    <div className="tab-pane active" id="tab_default_1" style={{textAlign: 'center'}}>
                                    <div>
                                        <div>
                                        <h3 style={{paddingBottom: 50}}>MY WISHLIST</h3>
                                        </div>
                                        <div className="col-md-3" style={{padding: 30}}>
                                        <a href="/ProductDetailWishlist"><img src="img/Products/Product Detail/Hoodie-Zebra.png" /></a>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                                            <p className="animico-txt5" style={{fontSize: 18}}>ZEBRA SQUARE </p>
                                        </div><br />
                                        <div>
                                            <a href="#">
                                            <button className="btn animico-btnc animico-txt5b" style={{fontSize: 12}}>
                                                ADD TO CART
                                            </button>
                                            </a>
                                        </div>
                                        </div>
                                        <div className="col-md-3" style={{padding: 30}}>
                                        <a href="/ProductDetailWishlist"><img src="img/Products/Product Detail/Whale Tshirt Fix.png" /></a>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                                            <p className="animico-txt5" style={{fontSize: 18}}>ZEBRA SQUARE </p>
                                        </div><br />
                                        <div>
                                            <a href="#">
                                            <button className="btn animico-btnc animico-txt5b" style={{fontSize: 12}}>
                                                ADD TO CART
                                            </button>
                                            </a>
                                        </div>
                                        </div>
                                        <div className="col-md-3" style={{padding: 30}}>
                                        <a href="/ProductDetailWishlist"><img src="img/Products/Product Detail/Backpack Pink.png" /></a>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                                            <p className="animico-txt5" style={{fontSize: 18}}>ZEBRA SQUARE </p>
                                        </div><br />
                                        <div>
                                            <a href="#">
                                            <button className="btn animico-btnc animico-txtb5" style={{fontSize: 12}}>
                                                ADD TO CART
                                            </button>
                                            </a>
                                        </div>
                                        </div>
                                        <div className="col-md-3" style={{padding: 30}}>
                                        <a href="/ProductDetailWishlist"><img src="img/Products/Product Detail/Backpack Pink.png" /></a>
                                        <div>
                                            <p className="animico-txt3" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                                            <p className="animico-txt5" style={{fontSize: 18}}>ZEBRA SQUARE </p>
                                        </div><br />
                                        <div>
                                            <a href="#">
                                            <button className="btn animico-btnc animico-txt5b" style={{fontSize: 12}}>
                                                ADD TO CART
                                            </button>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane col-md-12" id="tab_default_2">
                                    <div style={{textAlign: 'center'}}>
                                        <h3 style={{paddingBottom: 50}}>MY TRANSACTIONS HISTORY</h3>
                                    </div>
                                    <table className="table table-responsive">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">TRANSACTION ID</th>
                                            <th scope="col">AMMOUNT</th>
                                            <th scope="col">DETAIL</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>04/06/2018</td>
                                            <td>ANMTSH1001</td>
                                            <td>IDR 130.000</td>
                                            <td><a href="/Invoice" className="btn animico-btn animico-txt1">SEE DETAIL</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>05/09/2018</td>
                                            <td>ANMTSH1002</td>
                                            <td>IDR 560.000</td>
                                            <td><a href="/Invoice" className="btn animico-btn animico-txt1">SEE DETAIL</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>22/09/2018</td>
                                            <td>ANMTSH1003</td>
                                            <td>IDR 90.000</td>
                                            <td><a href="/Invoice" className="btn animico-btn animico-txt1">SEE DETAIL</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default Profile;