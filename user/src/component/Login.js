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
   axios.post(`http://localhost:8002/userlogin`, {
       username: e.username.value,
       password: e.password.value
   }).then((hasil) => {
       var respon= hasil.data
       if(respon !== 0) {
        cookies.set("sessioniduser", respon, {path: '/'})
        self.setState({
                    statusRedirect: true
                });
       }
       
   });
 }
    render() {
        if(this.state.statusRedirect) return <Redirect to="/Homepage"/>
        return (
            <div>
                {/* CONTENT */}
                <div>
                    <div className="container anim-container">
                        <div className="row">
                        {/* LEFT */}
                        <div className="col-md-4">
                        </div>
                        {/* MID */}
                        <div className="col-md-4"> 
                            {/* HEADER */}
                            <div style={{textAlign: 'center', paddingTop: '10%'}}>
                            <h4 className="animico-txt1b">Welcome to</h4>
                            <a href="/Homepage"><img src="img/Logo-mini.png" style={{width: 215, marginTop: 20, textAlign: 'center'}} /></a>
                            </div>
                            {/* FORM */}
                            <div style={{textAlign: 'center', paddingTop: '5.5%'}}>
                            <h2 className="animico-txt6b">Login</h2>
                            </div>
                            {/* INPUT */}
                            <div className="anim-loginbox">
                            <form className="animico-txt2b">
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <input type="email" ref='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" ref='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                {/* <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div> */}
                                <div style={{textAlign: 'center'}}>
                                <a onClick={() => this.fungsiLogin(this.refs)} type="submit" className="btn animico-btn animico-txt3">LOGIN</a>
                                </div>
                            </form>
                            </div>
                            {/* ALTERNATIVE */}
                            <div style={{textAlign: 'center', padding: 37}}>
                            <p className="animico-txt4b">Have not account yet?</p><br />
                            <a href="/Register" className="animico-txt4b">SIGN UP</a>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="col-md-4">
                        </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT END */}
            </div>
        );
    }
}
export default Login;