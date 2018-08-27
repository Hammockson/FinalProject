import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import { Link, Redirect } from 'react-router-dom';

const cookies = new Cookies()

class Cart extends Component {
    render() {
        if(cookies.get('sessioniduser') === undefined) {
            return <Redirect to="/Login"/>
        }

        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />
        return (
            <div>
                {navigation}
                
                <div style={{paddingTop: '5%', paddingBottom: '10%'}}>
                    <div className="container">
                        <h3 className="animico-txt5" style={{paddingBottom: 10}}>CHECKOUT</h3>
                    </div>
                    <div className="container">
                        <div className="col-md-12" style={{backgroundColor: '#222', marginBottom: 50}}>
                        <div className="animico-txt3b">
                            <table className=" container table animico-txt3b" style={{fontSize: 12}}>
                            <thead>
                                <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">NAME AND TYPE</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">AMMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"><img src="img/tshirtmini.jpg" /></th>
                                <td>ANIMICO TSHIRT - OWL SPIRIT</td>
                                <td>IDR 90.000</td>
                                <td>1</td>
                                <td>IDR 90.000</td>
                                </tr>
                                <tr>
                                <th scope="row"><img src="img/hoodiemini.jpg" /></th>
                                <td>ANIMICO HOODIE - ZEBRA SQUARE</td>
                                <td>IDR 130.000</td>
                                <td>1</td>
                                <td>IDR 130.000</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div>
                        <div className="col-md-5" style={{backgroundColor: '#222', padding: 50}}> 
                        <div className="animico-txt5b" style={{marginBottom: 50}}>
                        <h3>BILLING ADDRESS</h3>
                        </div>
                        <div className="animico-txt1b">
                        <div className="loginbox" style={{fontSize: 12}}>
                            <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputFirstName1">FIRST NAME*</label>
                                <input type="name" className="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="Enter First Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLastName1">LAST NAME*</label>
                                <input type="name" className="form-control" id="exampleInputLastName1" placeholder="Enter Last Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputAddress1">ADDRESS*</label>
                                <input type="text" className="form-control" id="exampleInputAddress1" placeholder="Enter Address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPostcode1">PHONE NUMBER*</label>
                                <input type="number" className="form-control" id="exampleInputPostCode1" placeholder="Enter Phone Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPostcode1">EMAIL*</label>
                                <input type="email" className="form-control" id="exampleInputPostCode1" placeholder="Enter Email" />
                            </div>
                            </form>
                        </div><br/><br/>
                        <div className="animico-txt2" style={{color: "white"}}> 
                        <h3>Payment Method</h3>
                        </div><br/>
                        <div>
                        Mandiri - 111 0001234567
                        </div>
                        </div> 
                    </div>
                        <div className="col-md-1" />
                        <div className="col-md-1" />
                        <div className="col-md-5 animico-txt4b">
                            <div style={{backgroundColor: '#222'}}>
                            <div className="col-md-12" style={{textAlign: 'right', padding: 20, backgroundColor: '#222', marginBottom: 50}}>
                                <table className=" container table animico-txt3b" style={{fontSize: 12}}>
                                <tbody>
                                    <tr>
                                    <td>SUBTOTAL</td>
                                    <td>IDR 220.000</td>
                                    </tr>
                                    <tr>
                                    <td>SHIPPING CHARGE</td>
                                    <td>IDR 50.000</td>
                                    </tr>
                                    <tr>
                                    <td>TOTAL</td>
                                    <td>IDR 270.000</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                            <div style={{textAlign: 'right'}}>
                            <a href="/Checkout" className="btn animico-btnc animico-txt5b">CHECKOUT</a>
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