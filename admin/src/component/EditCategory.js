import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class EditCategory extends Component {
  state = {
    redirect: false,
    kategoriid: 0,
    kategorinama: ""
}

componentDidMount(){
    var idkat = this.props.location.state.katid;
    var namakat = this.props.location.state.katnama;
    // console.log(namakat)
    this.setState({
        kategoriid: idkat,
        kategorinama: namakat,
    });
}

change = (e) => {
    this.setState({
        kategorinama: e.target.value
    })
}


  editData = (e) => {
    axios.post(`http://localhost:8002/EditCategory`, {
        inputid: e.idkat.value,
        inputnama: e.namakat.value,
      })
      .then(
        (ambilData) => {
            console.log(ambilData.data);
            if (ambilData.data === 1) {
              this.setState({
                redirect: true
            });
            }
           
          })
          console.log(e.idkat.value)
          console.log(e.namakat.value)
        }
    

    render() {
      if (this.state.redirect) return <Redirect to="/Category"/>
        return (
            <div className="wrapper">
                {/* Sidebar  */}
                <Sidebar />
                {/* Page Content  */}
                <div id="content">
                    <div className="right_col" role="main">
                        <div className>
                            <div className="page-title">
                            <div className="title_left" style={{textAlign: 'center'}}>
                                <h2>Edit Category</h2>
                            </div><br />

                            <div className="clearfix" />

                                <div className="row">
                                    <div className="control-label col-md-12">
                                        <div className="form-group">
                                            <input type="hidden" ref="idkat" value={this.state.kategoriid} className="form-control" id="exampleInputCategory" aria-describedby="Category" placeholder="Enter Category Name" />
                                            <label htmlFor="exampleInputName">Category Name</label>
                                            <input type="text" ref="namakat" value={this.state.kategorinama} onChange={this.change} className="form-control" id="exampleInputCategory" aria-describedby="Category" placeholder="Enter Category Name" />
                                        </div>
                                        <div className="modal-footer">
                                            <Link to="/Category" type="button" className="btn btn-red">
                                                CANCEL
                                            </Link>
                                            <Link to="#" type="button" onClick={() => this.editData(this.refs)} className="btn btn-green">
                                                SUBMIT
                                            </Link>
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
export default EditCategory;