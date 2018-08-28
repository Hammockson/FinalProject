import React, { Component } from 'react';
import Header from './Header'
import HeaderLogged from './HeaderLogged'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom';

const cookies = new Cookies();

class productList extends Component {
    state = {
        allproducts: [],
        listkategori: []
    }

    componentDidMount(){
        axios.get('http://localhost:8002/AllProducts')
        .then((getdata) => {
            this.setState({
                allproducts : getdata.data[0],
                listkategori: getdata.data[1]
            })
            console.log(this.state.allproducts)
            console.log(this.state.listkategori)
        })
    }

    filter (obj) {
        console.log(obj)
        axios.get(`http://localhost:8002/FilterCategory/` + obj,)
          .then(
            (ambilData) => {
                this.setState({
                    allproducts: ambilData.data
              })
            })
        }

    render() {
        
        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />

        const productlist = this.state.allproducts.map((item, index) =>{
            var productid = item.id;
            var productpic = item.product_image;
            var prodprice = item.product_price;
            var prodname = item.product_name;

            return <div className="col-sm-3" style={{padding: 10, border: '6px solid #ffffff', backgroundColor: '#dddddd'}}>
                <div className="product-image-wrapper" style={{padding: 10}}>
                    <div className="single-products">
                        <div className="productinfo text-center" style={{padding: 10}}>
                            <Link to={{ pathname: '/ProductDetail', state: {idproduct: productid}}}>
                                <img src={'http://localhost:8002/images/' + productpic} alt />
                                <h6>IDR {prodprice}</h6>
                                <p style={{fontWeight: "bold"}}>{prodname}</p>
                                <button type="submit" className="btn animico-btnc animico-txt5" style={{fontSize: 10}}>VIEW DETAIL</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        })
            

        const categorylist = this.state.listkategori.map((item, index) =>{
            var categoryid = item.id;
            var categoryname = item.category_name;

            return<li onClick={() => this.filter(categoryid)} value={categoryid}><a href="#tshirt" data-toggle="pill">{categoryname}</a></li>
        })

        return (
            <div className="container-fluid animico-txt3b" style={{marginTop: 100}}>
            {navigation}
            
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
                        <a href="/ProductDetail" className="btn animico-btnb animico-txt1" style={{marginTop: 20}}>MORE INFO</a>
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
                        {categorylist}
                    </ul>
                    <div>
                    </div>    
                    </div>
                    <div className="tab-content col-md-10">
                    <div className="tab-pane active" id="tshirt">
                        <div>
                            {productlist}
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