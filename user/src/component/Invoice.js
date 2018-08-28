import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import HeaderLogged from './HeaderLogged'
import axios from 'axios'
import $ from 'jquery'
import { Link, Redirect } from 'react-router-dom';

const cookies = new Cookies()

class Invoice extends Component {
    state = {
        detail: [],
        total:"",
        invoice:"",
        date:"",
        address:"",
        firstname:""
    }

    componentDidMount(){
        axios.post('http://localhost:8002/Invoice',{
            userid:cookies.get('sessioniduser')
        })
        .then((getdata) => {
            this.setState({
                detail : getdata.data,
            })
            console.log(this.state.detail)
         
            var total= 0
            for(var i = 0; i<getdata.data.length ; i++){
                total += Number(getdata.data[i].total_price)
            }
           this.setState({total:total})
           this.setState({invoice:getdata.data[0].invoice_number})
           this.setState({date:getdata.data[0].date})
           this.setState({address:getdata.data[0].address})
        })

        axios.post("http://localhost:8002/userall",{
            userid:cookies.get('sessioniduser')
        }).then((response)=>{
            if(response != undefined){
                console.log(response.data)
                this.setState({firstname:response.data[0].firstname})
            }
        })
    }
    render() {
        let mycookie = cookies.get('sessioniduser');
        let navigation = (mycookie !== undefined) ? <HeaderLogged /> : <Header />

        if(cookies.get('sessioniduser') === undefined) {
            return <Redirect to="/Login"/>
        }

        const listdata = this.state.detail.map((item, index) =>{
            var number_all = index + 1
            var nama_product= item.nama_product;
            var price = item.price;
            var quantity = item.quantity;
            var total_price = item.total_price;

            return  <tr key={index}>
            <th scope="row">{number_all}</th>
            <td>{nama_product}</td>
            <td>IDR {price}</td>
            <td>{quantity}</td>
            <td>IDR {total_price}</td>
            </tr>

        })

        return (
            <div>
                <Header />
                {navigation}

                <div className="container animico-txt3" style={{backgroundColor: '#ffffff', marginTop: '3%', padding: 50}}>
                    <div className="row animico-txt3"> 
                        <div className="col-md-12" style={{textAlign: 'center', border: "1px solid black"}}>
                        <h2>INVOICE</h2>
                        <h4>{this.state.invoice}</h4>
                        </div>
                        <div className="col-md-6">
                        <h4>BILLED TO:</h4>
                        <p>{this.state.firstname}</p>
                        <p>{this.state.address}</p>
                        <br />
                        </div>
                        <div className="col-md-6" style={{textAlign: 'right'}}>
                        <h4>ORDER DATE:</h4>
                        <p>{this.state.date}</p>
                        </div>
                    </div>
                    <div className="col-md-12" style={{backgroundColor: '#ffffff'}}>
                        <table className="table table-responsive">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ITEM</th>
                            <th scope="col">PRICE ID</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">TOTALS</th>
                            </tr>
                        </thead>
                        <tbody>
                           {listdata}
                            <tr className="animico-txt7">
                            <th scope="row" />
                            <td />
                            <td />
                            <td>TOTAL</td>
                            <td>IDR {this.state.total}</td>
                            </tr>
                        </tbody>
                        </table>
                        
                    </div>
                    <div className="col-md-12" style={{textAlign: 'center', padding: 50}}>
                        <a href="#" className="btn animico-btn animico-txt1">CONFIRM PAYMENT</a>
                        </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default Invoice;