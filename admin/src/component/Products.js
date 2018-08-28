import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
  state = {
    dataproduk: [],
}
componentDidMount(){
    axios.get('http://localhost:8002/Product').then(
        (ambilData) => {
            console.log(ambilData.data);
            this.setState({
                dataproduk: ambilData.data
            });
        }
    )
}

hapusData = (e) => {
  axios.post(`http://localhost:8002/RemoveProduct`, {
      inputNol: e,
    }).then(
      (ambilData) => {
          console.log(ambilData.data);
          if (ambilData.data === 1) {
            axios.get('http://localhost:8002/Product').then(
              (ambilData) => {
                  console.log(ambilData.data);
                  this.setState({
                      dataproduk: ambilData.data
                  });
              }
          )
          }
        })
          console.log(e)
      }
  
      render() {
        const hasil = this.state.dataproduk.map(
          (isi, urutan) => {
              var nomor = urutan + 1;
              var produkID = isi.id;
              var kategoriID = isi.id_category;
              var ukuranproduk = isi.id_size;
              var namaproduk = isi.product_name;
              var hargaproduk = isi.product_price;
              var detailproduk = isi.product_detail;
              var gambarproduk = isi.product_image;
               
              return <tr key={urutan}>
              <td scope="col">{nomor}</td>
              <td scope="col">{namaproduk}</td>
              <td scope="col">{kategoriID}</td>
              <td scope="col">{hargaproduk}</td>
              <td scope="col">{gambarproduk}</td>
              <td scope="col">{detailproduk}</td>
              <td scope="col">
                <Link to={{
                  pathname: "/EditProduct",
                  state:{
                    prodID: produkID,
                    katID: kategoriID,
                    prodnama: namaproduk,
                    prodharga: hargaproduk,
                    prodetail: detailproduk,
                    prodgarmabar: gambarproduk


                  }
                }}>
                <button className="btn btn-yellow" style={{fontSize: 12}}><span className="fa fa-edit" aria-hidden="true" /></button></Link>
                <button type="button" onClick={() => this.hapusData(produkID)}className="btn btn-red" style={{fontSize: 12}}><span className="fa fa-trash" aria-hidden="true" /></button>
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
            <h2><b>Products </b><span><a href="/AddProduct"><button className="btn btn-green">Add Product + </button></a></span></h2>
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
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>IMAGE</th>
                        <th>DETAIL</th>
                        <th>ACTION</th> 
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
export default Products;