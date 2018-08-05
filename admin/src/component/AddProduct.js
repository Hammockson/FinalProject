import React, { Component } from 'react';
import Header from './Header';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class AddCategory extends Component {
  state = {
    redirect: false,
    listukuran: [],
    listkategori: [],
    kategoriID: '',
    ukuranproduk: '',
    namaproduk: '',
    hargaproduk: '',
    detailproduk: '',
    gambarproduk: '',

}
componentDidMount(){
  axios.get('http://localhost:8002/AddProduct').then(
      (ambilData) => {
          // console.log(ambilData.data);
          console.log(ambilData.data[0]);
          console.log(ambilData.data[1]);
          this.setState({
            listkategori: ambilData.data[0],
            listukuran: ambilData.data[1]
              
          });
      }
  )
}

gambar = (e) => {
  switch(e.target.name){
    case 'gambarproduk' : 
    this.setState({
      gambarproduk:e.target.files[0]
    })
    break;
    default:
  }
}

  tambahData = (e) => {
    var kategoriID = e.listkategori.value;
    var ukuranproduk = e.listukuran.value;
    var namaproduk = e.namaproduk.value;
    var hargaproduk = e.hargaproduk.value;
    var detailproduk = e.detailproduk.value;

          this.setState({
            kategoriID: kategoriID,
            ukuranproduk: ukuranproduk,
            namaproduk: namaproduk,
            hargaproduk: hargaproduk,
            detailproduk: detailproduk,
          }) 
        }

kirimsemua = (e) => {
  e.preventDefault();
  let formproduk = new FormData();
  formproduk.append('katid', this.state.kategoriID);
  formproduk.append('sizeprod', this.state.ukuranproduk);
  formproduk.append('namaprod', this.state.namaproduk);
  formproduk.append('hargaprod', this.state.hargaproduk);
  formproduk.append('detailprod', this.state.detailproduk);
  formproduk.append('gambarprod', this.state.gambarproduk);

  axios.post('http://localhost:8002/AddProduct', formproduk).then((hasil) => {
    var respon = hasil.data; 
    if(respon === 1) 
    {
      this.setState({
        redirect: true
      })
    }
  })
  // console.log(this.state.kategoriID)
  // console.log(this.state.ukuranproduk)
  // console.log(this.state.namaproduk)
  // console.log(this.state.hargaproduk)
  // console.log(this.state.detailproduk)
  // console.log(this.state.gambarproduk)
}

    render() {
      if (this.state.redirect) return <Redirect to="/Products"/>

      const listukuran = this.state.listukuran.map((item, index) => {
        
        var itemID = item.id;
        var nameSize = item.size_name; 
        return <option key={index} value={itemID}>{nameSize}</option>
        
      }) 
      const listkategori = this.state.listkategori.map((item, index) => {
        
        var itemID = item.id;
        var nameCategory = item.category_name; 
        return <option key={index} value={itemID}>{nameCategory}</option>
        
      }) 

      
        return (

            <div className="main-content">
            <Header />
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="largeModalLabel">Add Product</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row anim-loginbox" style={{marginTop: 50}}>
                      {/* right collum */}
                      <div className="col-md-12">
                        <form onSubmit={this.kirimsemua} className="animico-txt2b">
                          <div>
                            <label htmlFor="country">Category</label>
                            <select ref="listkategori" className="form-control square" id="category">
                              {listkategori}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="country">Size</label>
                            <select ref="listukuran" className="form-control square" id="size">
                              {listukuran}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputName">Product Name</label>
                            <input ref="namaproduk" type="text" className="form-control"  placeholder="Enter Product Name" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPrice">Product Price</label>
                            <input ref="hargaproduk" type="number" className="form-control"  placeholder="Enter Price" />
                          </div>   
                          <div className="form-group">
                            <label htmlFor="exampleInputName">Product Image</label>
                            <input ref="gambarproduk" name="gambarproduk" onChange={this.gambar} type="file" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPrice">Product Detail</label>
                            <textarea ref="detailproduk" type="price" className="form-control"  placeholder="Enter Detail"></textarea>
                          </div>

                          <div className="modal-footer">
                            <Link to="/Products" type="button" className="btn btn-danger">
                                CANCEL
                            </Link>
                            <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-primary">
                                ADD
                            </button>
                          </div>   
                        </form>
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
export default AddCategory;