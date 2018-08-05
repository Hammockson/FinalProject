import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
    render() {
        return (
            <div>
              <Header />
                <div className="col-md-3" />
                <div className="col-md-9 main-content" style={{marginLeft: 300}}>
                  <div>
                  <div className="section__content section__content--p30">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-12" style={{margin: 60}}>
                            <a href="products.html" className="fa fa-angle-left"><span>   BACK TO PRODUCTS</span></a>
                          </div>
                          <div style={{textAlign: 'center'}}>
                            <h2>Product Detail</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{paddingTop: 50}}>
                        <div className="col-md-6">
                          <div style={{textAlign: 'center', marginTop: 50, marginBottom: 50}}>
                            <img src="images/icon/Snake Tshirt Fix.png" style={{maxWidth: '100%'}} />
                          </div>
                        </div>
                        <div className="col-md-6">
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
                            <span className="animico-txt5" style={{fontSize: 24}}>IDR 130.000</span>
                          </div>
                          <div style={{paddingTop: 20}}>
                            <a href="#" type="submit" className="btn animico-btn animico-tx7">EDIT DETAIL</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="copyright">
                        <p>Copyright © 2018 Animico. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        );
    }
}
export default ProductDetail;