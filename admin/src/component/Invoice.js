import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Invoice extends Component {
    render() {
        return (
            <div className="main-content">
            <Header />
              <div className="main-content">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <Link to="/Historytrans" className="fa fa-angle-left"><span>BACK TO HISTORY</span></Link>
                  </div>
                  {/* INVOICE */}
                  <div className="col-md-12" style={{ padding: 50}}>
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
                    <div>
                      <table className="table anim-table">
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
                    </div>
                  </div>  
                  {/* INVOICE END */}
                </div>
                <div className="col-md-12">
                  <div className="copyright">
                    <p>Copyright © 2018 Animico. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>

        );
    }
}
export default Invoice;