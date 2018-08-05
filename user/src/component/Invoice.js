import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

class Invoice extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container animico-txt3" style={{backgroundColor: '#ffffff', marginTop: '3%', padding: 50}}>
                    <div className="row animico-txt3"> 
                        <div className="col-md-12" style={{textAlign: 'center'}}>
                        <h2>INVOICE</h2>
                        <h4>#001ANM6789</h4>
                        </div>
                        <div className="col-md-6">
                        <h4>BILLED TO:</h4>
                        <p>ESA ADAMA</p>
                        <p>JL. SETIABUDI, JAKARTA</p>
                        <br />
                        </div>
                        <div className="col-md-6" style={{textAlign: 'right'}}>
                        <h4>ORDER DATE:</h4>
                        <p>04/06/1989</p>
                        </div>
                    </div>
                    <div className="col-md-12" style={{backgroundColor: '#ffffff'}}>
                        <table className="table table-responsive">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ITEM</th>
                            <th scope="col">PRICE ID</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">TOTALS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Animico Tshirt "Owl Spirit"</td>
                            <td>IDR 90.000</td>
                            <td>3</td>
                            <td>IDR 270.000</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Animico Backpack "Adventure"</td>
                            <td>IDR 130.000</td>
                            <td>1</td>
                            <td>IDR 130.000</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Animico Hoodie "Zebra Square"</td>
                            <td>IDR 110.000</td>
                            <td>1</td>
                            <td>IDR 110.000</td>
                            </tr>
                            <tr className="animico-txt5">
                            <th scope="row" />
                            <td />
                            <td />
                            <td>Subtotal</td>
                            <td>IDR 510.000</td>
                            </tr>
                            <tr className="animico-txt5">
                            <th scope="row" />
                            <td />
                            <td />
                            <td>Shipping</td>
                            <td>IDR 50.000</td>
                            </tr>
                            <tr className="animico-txt7">
                            <th scope="row" />
                            <td />
                            <td />
                            <td>TOTAL</td>
                            <td>IDR 560.000</td>
                            </tr>
                        </tbody>
                        </table>
                        <div className="col-md-12" style={{textAlign: 'center', padding: 50}}>
                        <a href="#" className="btn animico-btn animico-txt1">DOWNLOAD PDF</a>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default Invoice;