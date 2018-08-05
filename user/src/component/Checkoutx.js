import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

class Checkout extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container" style={{marginTop: '10%', marginBottom: '10%'}}>
                    <div className="col-md-6" style={{backgroundColor: '#162345', padding: 50}}> 
                        <div className="animico-txt5b" style={{marginBottom: 50}}>
                        <h3>BILLING ADDRESS</h3>
                        </div>
                        <div className="form-check"  style={{color: 'white'}}>
                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Default Address
                            </label>
                        </div><br/>
 
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
                        </div>
                        </div> 
                    </div>
                    <div className="col-md-6" style={{padding: 50}}>
                        <div className="animico-txt5" style={{marginBottom: 50}}>
                        <h3>YOUR ORDER</h3>
                        </div>
                        <div className="animico-txt5"> 
                        <p>TOTAL PRICE:</p>
                        <h2>IDR 270.000</h2>
                        </div><br/><br/><br/>
                        <div className="animico-txt2"> 
                        <h3>Payment Method</h3>
                        </div><br/>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" defaultValue id="defaultCheck1" name="payment" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Mandiri - 111 0001234567
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" defaultValue id="defaultCheck1" name="payment" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                BNI - 121 0001234567
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" defaultValue id="defaultCheck1" name="payment"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                BCA - 131 0001234567
                            </label>
                        </div>
                        <div style={{paddingTop: 60, paddingBottom: 60, textAlign: 'center'}}>
                        <a href="/Invoice" className="btn animico-btn animico-txt5b">CHECKOUT</a>   
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default Checkout;