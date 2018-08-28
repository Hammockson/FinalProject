import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Invoice extends Component {
  state = {
    datainvoice: [],
}
componentDidMount(){
    axios.get('http://localhost:8002/Invoice').then(
        (ambilData) => {
            console.log(ambilData.data);
            this.setState({
                datainvoice: ambilData.data
            });
        }
    )
}


  
  render() {

    const hasil = this.state.datainvoice.map(
      (isi, urutan) => {
          var nomor = urutan + 1;
          var invoiceid = isi.id;
          var invoicedate = isi.date;
          var invoicenumber = isi.number;
          var invoiceammount = isi.ammount;
            
          return <tr key={urutan}>
          <td scope="col">{nomor}</td>
          <td scope="col">{invoicedate}</td>
          <td scope="col">{invoicenumber}</td>
          <td scope="col">{invoiceammount}</td>
          <td scope="col">
            <Link to={{
              // pathname: "/EditProduct",
              // state:{
              //   prodID: produkID,
              //   katID: kategoriID,
              //   prodnama: namaproduk,
              //   prodharga: hargaproduk,


              // }
            }}>
            <button className="btn btn-yellow" style={{fontSize: 12}}><span className="fa fa-edit" aria-hidden="true" />VIEW DETAIL</button></Link>
          </td>
        </tr>
      }
  );
        return (
          <div className="wrapper">
            {/* Sidebar  */}
            <Sidebar />
            {/* Page Content  */}
            <div id="content">
              <div className="right_col" role="main">
                <div className>
                  <div className="page-title">
                    <div className="title_left">
                      <h2><b>Invoice </b></h2>
                    </div>
                    <div className="clearfix" />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="x_panel">
                          <div className="x_content">
                            <table id="datatable" className="table table-striped table-bordered">
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>Date</th>
                                  <th>Invoice Number</th>
                                  <th>Ammount</th>
                                  <th>Action</th> 
                                </tr>
                              </thead>
                              <tbody>
                                {hasil}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        
        );
    }
}
export default Invoice;