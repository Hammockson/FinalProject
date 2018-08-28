import React, { Component } from 'react';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Sidebar from './Sidebar'
import axios from 'axios'

const cookies = new Cookies()

class Homepage extends Component {
  state = {
    totaltshirt: 0,
    totalshirt: 0,
    totalhoodie: 0,
    totalkategori: 0,
    totaluser: 0,
    redirect: false,
  }
  
  componentDidMount(){
      axios.get('http://localhost:8002/TotalTshirt').then(
          (getdata) => {
              this.setState({
                  totaltshirt: getdata.data
              });
          }
      )
      axios.get('http://localhost:8002/TotalShirt').then(
          (getdata) => {
              this.setState({
                  totalshirt: getdata.data
              });
          }
      )
      axios.get('http://localhost:8002/TotalHoodie').then(
          (getdata) => {
              this.setState({
                  totalhoodie: getdata.data
              });
          }
      )
      axios.get('http://localhost:8002/TotalCategory').then(
          (getdata) => {
              this.setState({
                  totalkategori: getdata.data
              });
          }
      )
      axios.get('http://localhost:8002/TotalUser').then(
          (getdata) => {
              this.setState({
                  totaluser: getdata.data
              });
          }
      )
  }
    render() {
      if(cookies.get('sessionid') === undefined) return <Redirect to="/Login"/>
      
        return (
          <div className="wrapper">
          {/* Sidebar  */}
          <Sidebar />
          {/* Page Content  */}
          <div id="content">
            <div className="right_col" role="main">
              {/* top tiles */}
              <div className="row tile_count">
              <div className="col-md-12">
                <h1><b>Dashboard</b></h1>
              </div>
                <div className="col-md-4 col-sm-4 col-xs-6 tile_stats_count" style={{backgroundColor: '#d0d0d0', border: '5px solid white'}}> 
                  <span className="count_top"><i className="fa fa-user" /> Total Categories</span>
                  <div className="count">{this.state.totalkategori}</div>
                  <span className="count_bottom">On Animico Category</span>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 tile_stats_count" style={{backgroundColor: '#d0d0d0', border: '5px solid white'}}>
                  <span className="count_top"><i className="fa fa-clock-o" /> Total User</span>
                  <div className="count">{this.state.totaluser}</div>
                  <span className="count_bottom">Registered</span>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 tile_stats_count" style={{backgroundColor: '#d0d0d0', border: '5px solid white'}}>
                  <span className="count_top"><i className="fa fa-user" /> Item Sold</span>
                  <div className="count green">450</div>
                  <span className="count_bottom">On Animico Sales</span>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 tile_stats_count" style={{backgroundColor: '#d0d0d0', border: '5px solid white'}}>
                  <span className="count_top"><i className="fa fa-user" />Total Products</span>
                  <div className="count">{this.state.totaltshirt}</div>
                  <span className="count_bottom">On Animico <b>TSHIRT</b></span>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 tile_stats_count" style={{backgroundColor: '#d0d0d0', border: '5px solid white'}}>
                  <span className="count_top"><i className="fa fa-user" /> Total Products</span>
                  <div className="count">{this.state.totalshirt}</div>
                  <span className="count_bottom">On Animico <b>SHIRT</b></span>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 tile_stats_count" style={{backgroundColor: '#d0d0d0', border: '5px solid white'}}>
                  <span className="count_top"><i className="fa fa-user" /> Total Products</span>
                  <div className="count">{this.state.totalhoodie}</div>
                  <span className="count_bottom">On Animico <b>HOODIE</b></span>
                </div>
            </div>
          </div>
          </div>
          </div>
        

        );
    }
}
export default Homepage;