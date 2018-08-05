import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Historytrans extends Component {
    render() {
        return (
            <div className="main-content">
            <Header />
              <div className="main-content">
                <div style={{padding: 30, textAlign: 'center'}}>
                  <h4>TRANSACTION HISTORY</h4>
                </div>
                <div className="col-md-12">
                  <table className="table col-md-12">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">DATE</th>
                        <th scope="col">TRANSACTION ID</th>
                        <th scope="col">AMMOUNT</th>
                        <th scope="col">DETAIL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>04/06/2018</td>
                        <td>ANMTSH1001</td>
                        <td>IDR 130.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>05/09/2018</td>
                        <td>ANMTSH1002</td>
                        <td>IDR 560.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>22/09/2018</td>
                        <td>ANMTSH1003</td>
                        <td>IDR 90.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>22/09/2018</td>
                        <td>ANMTSH1004</td>
                        <td>IDR 200.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>22/09/2018</td>
                        <td>ANMTSH1005</td>
                        <td>IDR 1.790.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>23/09/2018</td>
                        <td>ANMTSH1006</td>
                        <td>IDR 95.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>28/09/2018</td>
                        <td>ANMTSH1007</td>
                        <td>IDR 340.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>03/10/2018</td>
                        <td>ANMTSH1008</td>
                        <td>IDR 650.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>22/10/2018</td>
                        <td>ANMTSH1009</td>
                        <td>IDR 90.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>01/012/2018</td>
                        <td>ANMTSH10010</td>
                        <td>IDR 3.000.000</td>
                        <td><Link to="/Invoice" className="btn btn-primary">SEE DETAIL</Link></td>
                      </tr>
                    </tbody>
                  </table>
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
export default Historytrans;