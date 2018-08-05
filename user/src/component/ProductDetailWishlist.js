import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

class ProductDetailWishlist extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <div>
                    {/* PRODUCT */}
                    <div className="container-fluid">
                        <div className="container-fluid" style={{paddingTop: '5%'}}>
                        <a href="/Profile" className="fa fa-angle-left"><span className="animico-txt3">   BACK TO PROFILE</span></a>
                        </div>
                        <div className="container-fluid" style={{textAlign: 'center'}}>
                        <h4 className="animico-txt5">DETAIL PRODUCT</h4>
                        </div>
                        <div className="row">
                        <div>
                            {/* KIRI */}
                            <div className="col-md-2" />
                            <div className="col-md-4">
                            <div style={{textAlign: 'center', marginTop: 50, marginBottom: 50}}>
                                <img src="img/Products/Product Detail/Snake Tshirt Fix.png" style={{maxWidth: '100%'}} />
                            </div>
                            </div>
                            {/* KANAN */}
                            <div className="col-md-4" style={{paddingTop: 50, marginBottom: 50}}>
                            <div>
                                <p className="animico-txt3" style={{fontSize: 14}}>ANIMICO TSHIRT</p>
                                <p className="animico-txt5" style={{fontSize: 24}}>SNAKE MASTER </p>
                                <hr style={{borderColor: '#162345'}} />
                            </div>
                            <div style={{paddingTop: 20}}>
                                <p className="animico-txt2" style={{fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.<br /><br />- Cotton Combed 30s<br />- Available Size : S / M / L / XL<br />- Price : IDR 90.000</p>
                            </div>
                            <div style={{paddingTop: 20}}>
                                {/*Checkbox butons*/}
                                <div className="btn-group" data-toggle="buttons">
                                <label className="btn animico-btnb active form-check-label">
                                    <input className="form-check-input" type="radio" autoComplete="off" /> S
                                </label>
                                <label className="btn animico-btnb form-check-label">
                                    <input className="form-check-input" type="radio" autoComplete="off" /> M
                                </label>
                                <label className="btn animico-btnb form-check-label">
                                    <input className="form-check-input" type="radio" autoComplete="off" /> L
                                </label>
                                <label className="btn animico-btnb form-check-label">
                                    <input className="form-check-input" type="radio" autoComplete="off" /> XL
                                </label>
                                </div>
                                {/*Checkbox butons*/}
                            </div>
                            <div style={{paddingTop: 20}}>
                                <img src="img/Icon/wallet-icon.png" style={{width: 40, height: 40, marginRight: 10}} />
                                <span className="animico-txt5" style={{fontSize: 24}}>IDR 130.000</span>
                            </div>
                            <div style={{paddingTop: 20}}>
                                <a href="#" type="submit" className="btn animico-btn animico-tx7">ADD TO CART</a>
                                <a href="#" type="submit" className="fa fa-heart btn animico-btn2" style={{padding: 9}} />
                            </div>
                            </div>
                            <div className="col-md-2" />
                        </div>
                        </div>
                        {/* PRODUCT END */}
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default ProductDetailWishlist;