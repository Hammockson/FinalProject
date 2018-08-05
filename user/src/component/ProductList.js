import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';


class productList extends Component {
    render() {
        return (
            <div className="container animico-txt3b" style={{marginTop: 100}}>
            <Header />
            
                {/* TITLE */}
                <div style={{textAlign: 'center'}} className="container">
                    <h3 className="animico-txt5">PRODUCT LIST</h3>
                </div><br /><br />
                {/* TITLE END */}
                {/* PROMO */}
                <div className="container">
                    <div style={{textAlign: 'center'}}>
                    <div className="col-md-4 animico-txt2b shadow banner-promo-right" style={{backgroundColor: '#162345', textAlign: 'center', padding: 30}}>
                        <div className="col-md-6">
                        <p className="animico-txt2b" style={{fontSize: 12}}>ANIMICO HOODIE</p>
                        <p className="animico-txt5b" style={{fontSize: 20}}>ZEBRA SQUARE </p>
                        <a href="/ProductDetail" className="btn animico-btnb animico-txt1" style={{marginTop: 20}}>MORE INFO</a>
                        </div>
                        <div className="col-md-6">
                        <img src="img/Products/Product Detail/Hoodie-Zebra.png" />
                        </div>
                    </div>
                    <div className="col-md-4 animico-txt2b shadow banner-promo-left" style={{backgroundColor: '#121d39', textAlign: 'center', padding: 30}}>
                        <div className="col-md-6">
                        <p className="animico-txt2b" style={{fontSize: 12}}>ANIMICO BACKPACK</p>
                        <p className="animico-txt5b" style={{fontSize: 20}}> FEMINE ADVENTURE </p>
                        <a href="p" className="btn animico-btnb animico-txt1" style={{marginTop: 20}}>MORE INFO</a>
                        </div>
                        <div className="col-md-6">
                        <img src="img/Products/Product Detail/Backpack Pink.png" />
                        </div>
                    </div>
                    <div className="col-md-4 animico-txt2b shadow banner-promo-right" style={{backgroundColor: '#162345', textAlign: 'center', padding: 30}}>
                        <div className="col-md-6">
                        <p className="animico-txt2b" style={{fontSize: 12}}>ANIMICO TSHIRT</p>
                        <p className="animico-txt5b" style={{fontSize: 20}}>OWL <br />SPIRIT </p>
                        <a href="/ProductDetail" className="btn animico-btnb animico-txt1" style={{marginTop: 20}}>MORE INFO</a>
                        </div>
                        <div className="col-md-6">
                        <img src="img/Products/Product Detail/Owl Fix.png" />
                        </div>
                    </div>
                    </div>
                </div>
                {/* PROMO END */}
                {/* PRODUCTS */}
                <div className="container" style={{paddingBottom: 100, paddingTop: 30}}>
                    <div>
                    <ul className="col-md-2 nav anim-nav-pills nav-stacked animico-txt2 shadow" style={{backgroundColor: '#dddddd'}}>
                        <li className="active"><a href="#tshirt" data-toggle="pill">Tshirt</a></li>
                        <li><a href="#hoodie" data-toggle="pill">Hoodie</a></li>
                        <li><a href="#backpack" data-toggle="pill">Backpack</a></li>
                    </ul>
                    <div>
                    </div>    
                    </div>
                    <div className="tab-content col-md-10">
                    <div className="tab-pane active" id="tshirt">
                        <div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Whale Tshirt Fix.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="hoodie">
                        <div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Hoodie-Zebra.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="backpack">
                        <div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="#" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}>
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                            <div className="product-image-wrapper" style={{padding: 10}}> 
                            <div className="single-products">
                                <div className="productinfo text-center" style={{padding: 10}}>
                                <a href="/ProductDetail">
                                    <img src="img/Products/Product Detail/Backpack Pink.png" alt />
                                    <h6>IDR 90.000</h6>
                                    <p>Easy Polo Black Edition</p>
                                </a>
                                <a href="/ProductDetail" className="btn animico-btnc animico-txt5">Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* PRODUCTS END*/}
                <br /><br />

                <Footer />
            </div>

        );
    }
}
export default productList;