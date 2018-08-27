import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import { Link, Redirect } from 'react-router-dom';

const cookies = new Cookies()

class EditProfile extends Component {
    render() {
        if(cookies.get('sessioniduser') === undefined) {
            return <Redirect to="/Login"/>
        }

        
        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />
        return (
            <div>
                <Header />
                
                <div className="container" style={{marginTop: 100, marginBottom: 100}}>
                    <div>
                        <a href="/Profile" className="fa fa-angle-left"><span className="animico-txt1">   BACK TO PROFILE</span></a>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h2 className="animico-txt5" style={{marginBottom: 100}}>EDIT PROFILE</h2>
                    </div>
                    <div className="row " style={{marginTop: 50}}>
                        {/* left column */}
                        <div className="col-md-3">
                        <div className="text-center">
                            <img src="img/100png" className="avatar img-circle" alt="avatar" />
                            <h6 className="animico-txt2">Upload a different photo...</h6>
                            <input type="file" className="form-control" />
                        </div>
                        </div>
                        {/* edit form column */}
                        <div className="col-md-9 personal-info">
                        <form className="form-horizontal animico-txt2" role="form">
                            <div className="form-group">
                            <label className="col-lg-3 control-label">First name:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue="Esa" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-3 control-label">Last name:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue="Adama" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-3 control-label">Email:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" defaultValue="j.esa.adama@gmail.com" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label">Username:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" defaultValue="esaadama" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label">Password:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="password" defaultValue={11111122333} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-3 control-label" />
                            <div className="col-md-8">
                                <input type="button" className="btn animico-btnc" defaultValue="Save Changes" />
                                <span />
                                <input type="reset" className="btn animico-btnb" defaultValue="Cancel" />
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
export default EditProfile;