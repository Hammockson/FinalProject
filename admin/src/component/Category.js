import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    state = {
        datakategori: [],
        redirect: false,
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

    tambahData = (e) => {
        axios.post(`http://localhost:8002/Category`, {
            inputSatu: e.namakategori.value,
          }).then(
            (ambilData) => {
                console.log(ambilData.data);
                if (ambilData.data === 1) {
                  this.setState({
                    redirect: true
                });
                }
               
              })
              console.log(e.namakategori.value)
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
        if (this.state.redirect) return <Redirect to="/Category"/>

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
                    }}><button className="btn btn-yellow" style={{fontSize: 12}}><span className="fa fa-edit" aria-hidden="true" /></button></Link>
                    <button type="button" onClick={() => this.hapusData(kategoriID)} className="btn btn-red" style={{fontSize: 12}}><span className="fa fa-trash" aria-hidden="true" /></button>
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
                            <h2>Categories <span><button className="btn btn-green" data-toggle="modal" data-target="#exampleModalCenter">Add Category + </button></span></h2>
                        </div>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Add Category</h5>
                                <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">
                                    <div className="form-group">
                                    <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Name <span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" ref="namakategori" required="required" className="form-control col-md-7 col-xs-12" />
                                    </div>
                                    </div>
                                    <div className="ln_solid" />
                                    <div className="form-group">
                                    <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                        <a href="/Category"><button className="btn btn-red" type="button" data-dismiss="modal">Cancel</button></a>
                                        <button onClick={() => this.tambahData(this.refs)} className="btn btn-green">Submit</button>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
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