import React, { Component } from 'react';
import Header from './Header';
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
              <td scope="col">{ukuranproduk}</td>
              <td scope="col">{detailproduk}</td>
              <td scope="col">
                <Link to={{
                  pathname: "/EditProduct",
                  state:{
                    prodID: produkID,
                    katID: kategoriID,
                    prodsize: ukuranproduk,
                    prodnama: namaproduk,
                    prodharga: hargaproduk,
                    prodetail: detailproduk,
                    prodgarmabar: gambarproduk


                  }
                }}>
                <button className="btn btn-success" style={{fontSize: 12}}><span className="fa fa-edit" aria-hidden="true" /></button></Link>
                <button type="button" onClick={() => this.hapusData(produkID)}className="btn btn-danger" style={{fontSize: 12}}><span className="fa fa-trash" aria-hidden="true" /></button>
              </td>
            </tr>
          }
      );
        return (
          <div className="main-content">
          <Header />
            <div className="section__content section__content--p30">
              <div className="container-fluid main-content">
                <div className="row">
                  <div className="col-md-12">
                    <div style={{textAlign: 'center'}}>
                      <h2>PRODUCTS</h2>
                    </div>
                  </div>
                </div><br/><br/><br/>
              </div>
              {/* TSHIRT */}
              <div>
                <div className="container">
                  <div className="row">
                    
                    <div className="col-md-12">
                      <div>
                        <div>
                          <table className="table table-hover" style={{fontSize: 12,backgroundColor: '#3e3f3a', color: 'white'}}>
                            <thead>
                              <tr class="table-dark">
                                <th scope="col">No.</th>
                                <th scope="col">NAME</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">IMAGE</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">DETAIL</th>
                                <th scope="col">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {hasil}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div style={{padding: 10, textAlign: 'center'}}>
                        <Link to="/AddProduct">
                        <button type="button" class="btn btn-info">ADD PRODUCT</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className="col-md-12" style={{textAlign: 'center'}}>
              <div className="copyright">
                <p>Copyright © 2018 Animico. All rights reserved.</p>
              </div>
            </div>
          </div>
        
        );
    }
}
export default Products;