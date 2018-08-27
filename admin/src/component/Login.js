import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Login extends Component {
state= {
  statusRedirect: false
}

  fungsiLogin = (e) => {
    var self = this
   axios.post(`http://localhost:8002/adminlogin`, {
       username: e.username.value,
       password: e.password.value
   }).then((hasil) => {
       var respon= hasil.data
       if(respon !== 0) {
        cookies.set("sessionid", respon, {path: '/'})
        self.setState({
                    statusRedirect: true
                });
       }
       
   });
 }

    render() {
      if(this.state.statusRedirect) return <Redirect to="/Homepage"/>
        return (
          <div className="container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4" style={{textAlign: 'center', marginTop: 150}}>
              <div>
                <div>
                  <img src="images/logo5.png" />
                </div>
                <h2 style={{marginTop: 50}}>Login</h2>
                Please enter your email and password
              </div>
              <form>
                <div className="form-group">
                  <input type="email" ref='username' className="form-control" id="inputEmail" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <input type="password" ref='password' className="form-control" id="inputPassword" placeholder="Password" />
                </div>
                <button onClick={() => this.fungsiLogin(this.refs)} type="button" className="btn btn-green">
                LOGIN
              </button>
              </form>
              <div className="col-md-4" />
            </div>
          </div>
        </div>
        );
    }
}
export default Login;

