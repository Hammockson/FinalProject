import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import axios from 'axios'
import $ from 'jquery'
import { Link, Redirect } from 'react-router-dom';
import Invoice from './Invoice';

const cookies = new Cookies()

class Cart extends Component {
    state = {
        listcart: [],
        pricesub:[],
        firstname: '',
        lastname: '',
        adrress: '',
        phone: '',
        email: '',
        grandtotal: 0,
        subtotharga:"",
        next:false
    }

    componentWillMount(){
        axios.post('http://localhost:8002/ShowCart', {
            iduser: cookies.get('sessioniduser')
        })
        .then((getdata) => {
            console.log(getdata.data)
            var cartlist = getdata.data[0];
            var subprice = getdata.data[1]
            this.setState({
                listcart: cartlist,
                pricesub: subprice
            })
            var Alltotal = 0;
            var listPrice = this.state.pricesub
            for (var i=0; i<listPrice.length; i++)
            {
                Alltotal = Alltotal + listPrice[i].sub_price
            }
            // looping to sum the total price of the all item
            this.setState({
                grandtotal: Alltotal
            })
            // initial grandtotal before select the delivery method
        })
    }

    deletecart = (nilai) => {
        var iduser =  cookies.get('sessioniduser');
        axios.post('http://localhost:8002/DeleteCart', {
            idcart: nilai,
            iduser: iduser
        })
        .then((getdata) => {
            var cartlist = getdata.data[0];
            var subprice = getdata.data[1]
            this.setState({
                listcart: cartlist,
                pricesub: subprice
            })
            var Alltotal = 0;
            var listPrice = this.state.pricesub
            for (var i=0; i<listPrice.length; i++)
            {
                Alltotal = Alltotal + listPrice[i].sub_price
            }
            // looping to sum the total price of the all item
            this.setState({
                grandtotal: Alltotal
            })
            // initial grandtotal before select the delivery method
        })
    }

    check = () =>
    {
        var self = this;
        if (document.getElementById("checked").checked === true)
        {
            // console.log('checked')
            var userID = cookies.get('sessioniduser');
            axios.post('http://localhost:8002/ShowUserDetail', {
            iduser: userID
        })
        .then((getdata) => {
            console.log(getdata.data)
            var datauser = getdata.data
            this.setState({
                firstname: datauser[0].firstname,
                lastname: datauser[0].lastname,
                address: datauser[0].address,
                phone: datauser[0].phone,
                email: datauser[0].email
            })
            $(document).ready(() => {
                $('#firstname').val(this.state.firstname);
                $('#lastname').val(this.state.lastname);
                $('#address').val(this.state.address);
                $('#phone').val(this.state.phone);
                $('#email').val(this.state.email);
            })
            // if the input already inputed with some value, then the checkbox clicked, the remain value will change
            // with the default address value. If function above not exist, the setState can't replace the remain
            // value
        })
                // this function is to take the user info for default address (for shipping)   
        }
        else
        {
            self.setState({
                firstname: '',
                lastname: '',
                address: '',
                phone: '',
                email: ''
            })
            // if the checkbox uncheck

            $(document).ready(() => {
                $('#firstname').val(this.state.firstname);
                $('#lastname').val(this.state.lastname);
                $('#address').val(this.state.address);
                $('#phone').val(this.state.phone);
                $('#email').val(this.state.email);
            })
            // if the input already inputed with some value, then the checkbox clicked, the remain value will change
            // with the default setState value. If function above not exist, the setState can't replace the remain
            // value
        }
    }
    // to take default address if users want to use their address that store in their userprofile

    gantiqty= (qtybaru,idcart) => {
        var mycookie = cookies.get('sessioniduser');
        console.log(qtybaru)
        console.log(idcart)
        axios.post('http://localhost:8002/UpdateQty', {
            newqty: qtybaru,
            cartid: idcart,
            iduser: mycookie
        })
        .then((getdata) => {
            var cartlist = getdata.data[0];
            var subprice = getdata.data[1]
            this.setState({
                listcart: cartlist,
                pricesub: subprice
            })
            var Alltotal = 0;
            var listPrice = this.state.pricesub
            for (var i=0; i<listPrice.length; i++)
            {
                Alltotal = Alltotal + listPrice[i].sub_price
            }
            // looping to sum the total price of the all item
            this.setState({
                grandtotal: Alltotal
            })
            // initial grandtotal before select the delivery method
        })
    }


    cart(obj){
        var address = obj.address.value
        var phone = obj.phone.value
        var id_user = cookies.get('sessioniduser')

        axios.post('http://localhost:8002/ForInvoice', {
                address: address,
                phone: phone,
                id_user: id_user
        }).then((response)=>{
            if(response.data == "berhasil"){
                this.setState({next:true})
            }
        })
   
    }



    render() {

        if(this.state.next){
            return <Redirect to="/Invoice"/>
        }

        if(cookies.get('sessioniduser') === undefined) {
            return <Redirect to="/Login"/>
        }
        
        const productlist = this.state.listcart.map((item, index) =>{
            var prodgambar = item.product_image;
            var idcart = item.cart_id
            var prodname = item.product_name;
            var prodprice = item.product_price;
            var prodqty = item.qty;
            var subtotal = this.state.pricesub;

            for (var i=0; i<subtotal.length; i++){
                if(subtotal[i].cart_id === idcart){
                    var subtotharga = subtotal[i].sub_price
                }
            }


            return <tr key={index}>
            <th scope="row"><img src={'http://localhost:8002/images/' + prodgambar} style={{width:100}}/></th>
            <td ><p ref="prodname">{prodname}</p></td>
            <td><p ref="price">IDR {prodprice}</p></td>
            <td><input onChange={(e) => this.gantiqty(e.target.value, idcart)} ref="qty" type="number" min={1} defaultValue={prodqty}/></td>
            <td><p ref="totalharga">{subtotharga}</p></td>
            <td><button type="button" onClick={() => this.deletecart(idcart)} className="btn animico-btnc animico-txt5b">REMOVE</button></td>
        </tr>
        })

        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />

        return (
            <div>
                {navigation}
                
                <div style={{paddingTop: '5%', paddingBottom: '10%'}}>
                    <div className="container">
                        <h3 className="animico-txt5" style={{paddingBottom: 10}}>MY CART</h3>
                    </div>
                    <div className="container">
                        <div className="col-md-12" style={{backgroundColor: '#d2d2d2', marginBottom: 50}}>
                        <div className="animico-txt5">
                            <table className=" container table animico-txt5" style={{fontSize: 12}}>
                            <thead>
                                <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">NAME AND TYPE</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">AMMOUNT</th>
                                <th scope="col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productlist}
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div>
                        <div className="col-md-6" style={{backgroundColor: '#d2d2d2', padding: 50}}> 
                        <div className="animico-txt5" style={{marginBottom: 50}}>
                        <h3>BILLING ADDRESS</h3>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checked" onChange={this.check} type="checkbox" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Default Address
                            </label>
                        </div><br/>
 
                        <div className="animico-txt5">
                        <div className="loginbox" style={{fontSize: 12}}>
                            <form>
                            <div className="form-group">
                                <label>FIRST NAME*</label>
                                <input type="text" className="form-control" ref="firstname" id="firstname" defaultValue={this.state.firstname} placeholder="Enter First Name" />
                            </div>
                            <div className="form-group">
                                <label>LAST NAME*</label>
                                <input type="text" className="form-control" ref="lastname" id="lastname" defaultValue={this.state.lastname} placeholder="Enter Last Name" />
                            </div>
                            <div className="form-group">
                                <label>ADDRESS*</label>
                                <input type="text" className="form-control" ref="address" id="address" defaultValue={this.state.address} placeholder="Enter Address" />
                            </div>
                            <div className="form-group">
                                <label>PHONE NUMBER*</label>
                                <input type="text" className="form-control" ref="phone" id="phone" defaultValue={this.state.phone} placeholder="Enter Phone Number" />
                            </div>
                            <div className="form-group">
                                <label>EMAIL*</label>
                                <input type="text" className="form-control" ref="email" id="email" defaultValue={this.state.email} placeholder="Enter Email" />
                            </div>
                            </form>
                        </div><br/><br/>
                        
                            </div> 
                        </div>
                        <div className="col-md-6 animico-txt5b" >

                            <div style={{padding:20, textAlign: "center", backgroundColor: "#009946"}}>
                                <p>TOTAL: 
                                    <span>
                                        <h2>
                                            IDR {this.state.grandtotal}
                                        </h2>
                                    </span>
                                </p>
                            </div>
                            <div className="animico-txt5" style={{padding:20, textAlign: "center", backgroundColor: "rgb(210, 210, 210)"}}>
                                <p>PAYMENT METHOD</p>
                                <p>Bank Mandiri - 111 0001234567</p>
                            </div>
                        
                            {/* <div style={{backgroundColor: '#d2d2d2'}}>
                            <div className="col-md-12" style={{textAlign: 'right', padding: 20, backgroundColor: '#d2d2d2', marginBottom: 50}}>
                                <table className=" container table animico-txt5" style={{fontSize: 12}}>
                                <tbody>
                                    <tr>
                                    <td>TOTAL</td>
                                    <td>{this.state.grandtotal}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div> */}
                            <div style={{textAlign: 'center', marginTop: 50,}}>
                            <button onClick={()=>this.cart(this.refs)} className="btn animico-btnc animico-txt5b">CHECKOUT</button>
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
export default Cart;