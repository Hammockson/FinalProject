import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Register extends Component {
    state = {
        redirect: false,
        clientfirstname: '',
        clientlastname: '',
        clientusername: '',
        clientemail: '',
        clientpassword: '',
        clientphone: '',
        clientaddress: '',
    }
    

    tambahData = (e) => {
        axios.post('http://localhost:8002/AddUser', {
            cfname : e.clientfirstname.value,
            clname : e.clientlastname.value,
            cusername : e.clientusername.value,
            cemail : e.clientemail.value,
            cpassword : e.clientpassword.value,
            cphone : e.clientphone.value,
            caddress : e.clientaddress.value
          
            })
        }

    render() {
        return (
            <div style={{backgroundColor: '#44414a'}}>
                {/* CONTENT */}
                <div>
                    <div className="container anim-container">
                        <div className="row">
                        {/* LEFT */}
                        <div className="col-md-4">
                        </div>
                        {/* MID */}
                        <div className="col-12 col-md-4"> 
                            {/* HEADER */}
                            <div style={{textAlign: 'center'}}>
                            <h4 className="animico-txt1b"></h4>
                            <img src="img/Logo-mini.png" style={{width: 215, textAlign: 'center'}} />
                            </div>
                            {/* FORM */}
                            <div style={{textAlign: 'center', paddingTop: '10%'}}>
                            <h2 className="animico-txt6b">Sign Up</h2>
                            </div>
                            {/* INPUT */}
                            <div className="anim-loginbox" style={{padding: 20}}>
                            <form className="animico-txt3b">
                                <div className="form-group">
                                <label >First Name*</label>
                                <input type="text" ref="clientfirstname" className="form-control" required="required" aria-describedby="emailHelp" placeholder="Enter First Name" />
                                </div>
                                <div className="form-group">
                                <label>Last Name*</label>
                                <input type="text" ref="clientlastname" className="form-control" required="required" aria-describedby="emailHelp" placeholder="Enter Last Name" />
                                </div>
                                <div className="form-group">
                                <label>Username*</label>
                                <input type="text" ref="clientusername" className="form-control" required="required" placeholder="Enter Username" />
                                </div>
                                <div className="form-group">
                                <label>Email*</label>
                                <input type="email" ref="clientemail" className="form-control" required="required" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                <label>Password*</label>
                                <input type="password" ref="clientpassword" className="form-control" required="required" placeholder="Enter Password" />
                                </div>
                                <div className="form-group">
                                <label>Phone</label>
                                <input type="number" ref="clientphone" className="form-control" placeholder="Enter Phone Number" />
                                </div>
                                <div className="form-group">
                                <label>Address</label>
                                <input type="text" ref="clientaddress" className="form-control" placeholder="Enter Address" />
                                </div>
                                {/* <div className="form-group">
                                <label>Picture</label>
                                <input type="file" name="file" onChange={this.gambar} className="form-control" placeholder="Enter Address" />
                                </div> */}
                                {/* <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms &amp; conditions</label>
                                </div> */}
                                <div style={{textAlign: 'center'}}>
                                <a href="/Login" type="submit" onClick={() => this.tambahData(this.refs)} className="btn animico-btn animico-txt3">SIGNUP</a>
                                </div>
                            </form>
                            </div>
                            {/* ALTERNATIVE */}
                            <div style={{textAlign: 'center', padding: 37}}>
                            <p className="animico-txt4b">Already have an account?</p><br />
                            <a href="/Login" className="animico-txt4b">LOGIN</a>
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
export default Register;