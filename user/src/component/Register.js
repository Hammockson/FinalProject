import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {
    render() {
        return (
            <div>
                {/* CONTENT */}
                <div>
                    <div className="container-fluid anim-container">
                        <div className="row">
                        {/* LEFT */}
                        <div className="col-md-4">
                        </div>
                        {/* MID */}
                        <div className="col-12 col-md-4"> 
                            {/* HEADER */}
                            <div style={{textAlign: 'center', paddingTop: '10%'}}>
                            <h4 className="animico-txt1b">Welcome to</h4>
                            <img src="img/Logo-mini.png" style={{width: 215, marginTop: 20, textAlign: 'center'}} />
                            </div>
                            {/* FORM */}
                            <div style={{textAlign: 'center', paddingTop: '10%'}}>
                            <h2 className="animico-txt6b">Sign Up</h2>
                            </div>
                            {/* INPUT */}
                            <div className="anim-loginbox" style={{padding: 20}}>
                            <form className="animico-txt3b">
                                <div className="form-group">
                                <label htmlFor="exampleInputName1">Name</label>
                                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputConfrmPassword1" placeholder="Confirm Password" />
                                </div>
                                <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms &amp; conditions</label>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                <a href="/Login" type="submit" className="btn animico-btn animico-txt3">SIGNUP</a>
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