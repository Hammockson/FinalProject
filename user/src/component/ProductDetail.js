import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import axios from 'axios'
import { Link } from 'react-router-dom';

const cookies = new Cookies();

class ProductDetail extends Component {
    state = {
        allproducts: [],
        listkategori: [],
        listsize: []
    }

    componentDidMount(){
        var idproduk = this.props.location.state.idproduct
        var self = this
        console.log(idproduk)
        axios.get('http://localhost:8002/AllProducts')
        .then((getdata) => {
            this.setState({
                allproducts : getdata.data[0],
                listkategori: getdata.data[1],
                listsize: getdata.data[2]
            })
            console.log(this.state.allproducts)
            console.log(this.state.listkategori)
            console.log(this.state.listsize)
        })
    }
    render() {

        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />

        const categorylist = this.state.listkategori.map((item, index) =>{
            var categoryid = item.id;
            var categoryname = item.category_name;

            return <p className="animico-txt3" style={{fontSize: 14}}>ANIMICO {categoryname}</p>
            
        })

        const sizelist = this.state.listsize.map((item, index) =>{
            var sizeid = item.id;
            var sizename = item.size_name;

            return <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                <input className="form-check-input" type="radio" autoComplete="off" /> {sizename}
                </label>  
        })

        const productlist = this.state.allproducts.map((item, index) =>{
            var productid = item.id;
            var productpic = item.product_image;
            var prodprice = item.product_price;
            var prodname = item.product_name;
            var proddetail = item.product_detail;
            

            return <div className="row">
            <div>
                {/* KIRI */}
                <div className="col-md-2" />
                <div className="col-md-4">
                <div style={{textAlign: 'center', marginTop: 50, marginBottom: 50}}>
                    <img src={'http://localhost:8002/images/' + productpic} style={{maxWidth: '100%'}} />
                </div>
                </div>
                {/* KANAN */}
                <div className="col-md-4" style={{paddingTop: 50, marginBottom: 50}}>
                <div>
                    {categorylist}
                    <p className="animico-txt5" style={{fontSize: 24}}>{prodname}</p>
                    <hr style={{borderColor: '#646464'}} />
                </div>
                <div style={{paddingTop: 20}}>
                    <p className="animico-txt2" style={{fontSize: 12}}>{proddetail}</p>
                </div>
                <div style={{paddingTop: 20}}>
                    {/*Checkbox butons*/}
                    <div className="btn-group" data-toggle="buttons">
                    {sizelist}
                    </div>
                    {/*Checkbox butons*/}
                </div>
                <div style={{paddingTop: 20}}>
                    <img src="img/Icon/wallet-icon.png" style={{width: 40, height: 40, marginRight: 10}} />
                    <span className="animico-txt5" style={{fontSize: 24}}>IDR {prodprice}</span>
                </div>
                <div style={{paddingTop: 20}}>
                    <a href="#" type="submit" className="btn animico-btnc animico-txt5" style={{fontSize: 10}}>ADD TO CART</a>
                    {/* <a href="#" type="submit" className="fa fa-heart btn animico-btn2" style={{padding: 9}} /> */}
                </div>
                </div>
                <div className="col-md-2" />
            </div>
            </div>
        })
        
        return (
            <div className="container animico-txt3b" style={{marginTop: 50, padding: 10}}>
            {navigation}
                
                <div>
                    {/* PRODUCT */}
                    <div className="container-fluid">
                        <div className="container-fluid" style={{paddingTop: '5%'}}>
                        <a href="/ProductList"><button className="btn animico-btnb fa fa-angle-left"><span className="animico-txt2b">  BACK TO ALL COLLECTION</span></button></a>
                        </div>
                        <div className="container-fluid" style={{textAlign: 'center'}}>
                        <h4 className="animico-txt5">DETAIL PRODUCT</h4>
                        </div>
                        {productlist}
                        {/* PRODUCT END */}
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default ProductDetail;