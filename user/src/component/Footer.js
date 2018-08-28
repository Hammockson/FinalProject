import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className=" container-fluid footer-distributed">
              <div className="footer-left animico-txt2">
                
                <div>
                  <span><img src="img/logo3.png" /></span>
                </div>
                <p className="footer-links">
                  <a href="#">Home</a>
                  ·
                  <a href="#">Blog</a>
                  ·
                  <a href="#">Pricing</a>
                  ·
                  <a href="#">About</a>
                  ·
                  <a href="#">Faq</a>
                  ·
                  <a href="#">Contact</a>
                </p>
                <p className="footer-company-name">Animico © 2018</p>
              </div>
              <div className="footer-center animico-txt2">
                <div style={{marginBottom: 10}}>
                
                  <p><span>21 Revolution Street</span> Paris, France</p>
                </div><br />
                <div style={{marginBottom: 10}}> 
                
                  <p>+1 555 123456</p>
                </div><br />
                <div>
                
                  <p><a href="mailto:animico.apparel@gmail.com">animico.apparel@gmail.com</a></p>
                </div>
              </div>
              <div className="footer-right animico-txt2">
                <p className="footer-company-about">
                  <span>About the company</span>
                  Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                  <a href="#"><img src="img/Icon/Intsagram-128.png" style={{width: 20, height: 20}} /></a> 
                  <a href="#"><img src="img/Icon/Facebook-128.png" style={{width: 20, height: 20}} /></a> 
                  <a href="#"><img src="img/Icon/Twitter-128.png" style={{width: 20, height: 20}} /></a> 
                </div>
              </div>
            </footer>

        );
    }
}
export default Footer;