import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    state = {
        datakategori: [],
    }
    componentDidMount(){
        axios.get('http://localhost:8002/Category').then(
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    datakategori: ambilData.data
                });
            }
        )
    }

    hapusData = (e) => {
      axios.post(`http://localhost:8002/RemoveCategory`, {
          inputNol: e,
        }).then(
          (ambilData) => {
              console.log(ambilData.data);
              if (ambilData.data === 1) {
                axios.get('http://localhost:8002/Category').then(
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    datakategori: ambilData.data
                });
            }
        )
              }
            })
              console.log(e)
          }

      render() {
        const hasil = this.state.datakategori.map(
            (isi, urutan) => {
                var nomor = urutan + 1;
                var kategoriID = isi.id;
                var namakategori = isi.category_name;
                 
                return <tr key={urutan}>
                <td scope="col">{nomor}</td>
                <td scope="col">{namakategori}</td>
                <td scope="col">
                    <Link to={{
                      pathname: "/EditCategory",
                      state:
                      {
                        katid: kategoriID,
                        katnama: namakategori
                      }
                    }}><button className="btn btn-warning" style={{fontSize: 12}}><span className="fa fa-edit" aria-hidden="true" /></button></Link>
                    <button type="button" onClick={() => this.hapusData(kategoriID)} className="btn btn-danger" style={{fontSize: 12}}><span className="fa fa-trash" aria-hidden="true" /></button>
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
                      <h2>CATEGORY</h2>
                    </div>
                  </div>
                </div><br/>
              </div>
              {/* TSHIRT */}
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8">
                      <div>
                        <div>
                          <table className="table table-bordered table-hover" style={{borderColor: 'black'}}>
                            <thead>
                              <tr class="table-dark">
                                <th scope="col">No.</th>
                                <th scope="col">NAME</th>
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
                      <Link to="/AddCategory">
                        <button type="button" class="btn btn-success" style={{fontWeight:'bold'}}>ADD CATEGORY   <span className="fa fa-plus" aria-hidden="true" /></button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2"> </div>
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