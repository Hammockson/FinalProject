import React, { Component } from 'react';
import Header from './Header';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class AddCategory extends Component {
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
            <div className="main-content" style={{marginTop: 100}}>
            <Header />
              <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="smallmodalLabel">Edit Category</h5>
                    
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                        <input type="hidden" ref="idkat" value={this.state.kategoriid} className="form-control" id="exampleInputCategory" aria-describedby="Category" placeholder="Enter Category Name" />
                      <label htmlFor="exampleInputName">Category Name</label>
                      <input type="text" ref="namakat" value={this.state.kategorinama} onChange={this.change} className="form-control" id="exampleInputCategory" aria-describedby="Category" placeholder="Enter Category Name" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Link to="/Category" type="button" className="btn btn-danger">
                        CANCEL
                    </Link>
                    <Link to="#" type="button" onClick={() => this.editData(this.refs)} className="btn btn-primary">
                        SUBMIT
                    </Link>
                    
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
export default AddCategory;