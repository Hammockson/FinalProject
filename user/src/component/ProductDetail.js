import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';

const cookies = new Cookies();

class ProductDetail extends Component {
    state = {
        allproducts: [],
        listkategori: [],
        listsize: [],
        namakategori: '',
        namaproduk: '',
        detailproduk: '',
        hargaproduk: '',
        gambarproduk: '',
        redirectcart: false

    }

    componentDidMount(){
        var idproduk = this.props.location.state.idproduct
        var self = this
        console.log(idproduk)
        axios.post('http://localhost:8002/ProductDetail/', {
            tangkapdata:idproduk
        })
        .then((getdata) => {
            var tarikdataid = getdata.data
            console.log(tarikdataid)
            this.setState({
                listsize: tarikdataid[1],
                namakategori: tarikdataid[0][0].category_name,
                namaproduk: tarikdataid[0][0].product_name,
                detailproduk: tarikdataid[0][0].product_detail,
                hargaproduk: tarikdataid[0][0].product_price,
                gambarproduk: tarikdataid[0][0].product_image,

            })
        })
    }

    tambahCart = () => {
        var filtersize = document.querySelector('input[name="size"]:checked').value;
        var idproduk = this.props.location.state.idproduct;
        var quantity = 1;
        var clientid = cookies.get('sessioniduser')
        // console.log(filtersize)
        // console.log(idproduk)
        // console.log(clientid)

            axios.post('http://localhost:8002/AddCart/', 
            {
            sizefilter: filtersize,
            idproduk: idproduk,
            quantityproduct: quantity,
            idclient: clientid
            })
            .then((getdata) => {
                var responcart = getdata.data
                console.log(responcart)
                if (responcart===1){
                    this.setState({
                        redirectcart: true
                    })
                }
                else
                {
                    console.log('ERROR CUY')
                }
            })
    }

    

    render() {

        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />

        if(this.state.redirectcart) {
            return <Redirect to="/Cart" />
        }
        
        const sizelist = this.state.listsize.map((item, index) =>{
            var sizeid = item.id;
            var sizename = item.size_name;

            return <label className="btn animico-btnc2 form-check-label animico-txt5" style={{fontSize: 12}}>
                <input className="form-check-input" name="size" type="radio" value={sizeid} autoComplete="off" /> {sizename}
                </label>  
        })

        
        return (
            <div className="container-fluid animico-txt3b" style={{marginTop: 5, padding: 10}}>
            {navigation}
                
                <div>
                    {/* PRODUCT */}
                    <div className="container">
                        <div className="container" style={{paddingTop: '5%'}}>
                        <a href="/ProductList"><button className="btn animico-btnb fa fa-angle-left"><span className="animico-txt2b">  BACK TO ALL COLLECTION</span></button></a>
                        </div>
                        <div className="container" style={{textAlign: 'center'}}>
                        <h4 className="animico-txt5">DETAIL PRODUCT</h4>
                        </div>
                        <div className="row">
                            <div>
                                {/* KIRI */}
                                <div className="col-md-2" />
                                <div className="col-md-4">
                                <div style={{textAlign: 'center', marginTop: 50, marginBottom: 50}}>
                                    <img src={'http://localhost:8002/images/' + this.state.gambarproduk} style={{maxWidth: '100%'}} />
                                </div>
                                </div>
                                {/* KANAN */}
                                <div className="col-md-4" style={{paddingTop: 50, marginBottom: 50}}>
                                <div>
                                    <p className="animico-txt3" style={{fontSize: 14}}>ANIMICO {this.state.namakategori}</p>
                                    <p className="animico-txt5" style={{fontSize: 24}}>{this.state.namaproduk}</p>
                                    <hr style={{borderColor: '#646464'}} />
                                </div>
                                <div style={{paddingTop: 20}}>
                                    <p className="animico-txt2" style={{fontSize: 12}}>{this.state.detailproduk}</p>
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
                                    <span className="animico-txt5" style={{fontSize: 24}}>IDR {this.state.hargaproduk}</span>
                                </div>
                                <div style={{paddingTop: 20}}>
                                    <button onClick={this.tambahCart} type="button" className="btn animico-btnc animico-txt5" style={{fontSize: 10}}>ADD TO CART</button>
                                    <p>{this.state.statuscart}</p>
                                    {/* <a href="#" type="submit" className="fa fa-heart btn animico-btn2" style={{padding: 9}} /> */}
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
export default ProductDetail;