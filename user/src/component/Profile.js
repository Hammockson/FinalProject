import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import { Link, Redirect } from 'react-router-dom';

const cookies = new Cookies()

class Profile extends Component {
    render() {
        if(cookies.get('sessioniduser') === undefined) {
            return <Redirect to="/Login"/>
        }

        
        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />
        return (
            <div>
                {navigation}
                <div style={{marginTop: 100, marginBottom: 100}}>
                    <div className="container" style={{backgroundColor: '#27282c'}}>
                        <div className="col-md-3">
                        <img src="img/101.png" style={{padding: 50}} />
                        </div>
                        <div className="col-md-6">
                        <h3 className="animico-txt4b">ESA ADAMA</h3>
                        <p className="animico-txt2b">j.esa.adama@gmail.com</p>
                        <p className="animico-txt2b">+62 81298799023</p>
                        <p className="animico-txt2b">INDONESIA</p>
                        <hr />
                        <span className="anim-badge2 animico-txt3b" style={{padding: 10}}>PREMIUM MEMBER</span>
                        </div>
                        <div className="col-md-3" style={{textAlign: 'center', marginTop: 100}}>
                        <a href="/EditProfile" className="btn animico-btnc animico-txt1">EDIT PROFILE</a>
                        </div>
                    </div>

                    <div className="container">
                    <div style={{textAlign: 'center'}}>
                        {/* <h3 style={{paddingBottom: 50, marginTop: 100}}><b>MY TRANSACTIONS HISTORY</b></h3> */}
                        <h1 class="badge badge-secondary" style={{padding: 10, marginTop: 50}}>TRANSACTION HISTORY</h1>
                    </div>
                    <table className="table table-responsive" style={{marginTop: 50}}>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">DATE</th>
                            <th scope="col">TRANSACTION ID</th>
                            <th scope="col">AMMOUNT</th>
                            <th scope="col">DETAIL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>04/06/2018</td>
                            <td>ANMTSH1001</td>
                            <td>IDR 130.000</td>
                            <td><a href="/Invoice" className="btn animico-btn animico-txt1">SEE DETAIL</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>05/09/2018</td>
                            <td>ANMTSH1002</td>
                            <td>IDR 560.000</td>
                            <td><a href="/Invoice" className="btn animico-btn animico-txt1">SEE DETAIL</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>22/09/2018</td>
                            <td>ANMTSH1003</td>
                            <td>IDR 90.000</td>
                            <td><a href="/Invoice" className="btn animico-btn animico-txt1">SEE DETAIL</a></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default Profile;