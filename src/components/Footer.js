import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Footer extends Component {
    render() {
        return (
            <main className="ps-main">
             <div className="ps-footer bg--cover" data-background="assets/images/background/parallax.jpg">
        <div className="ps-footer__content">
          <div className="ps-container">
            <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--info">
                      <header><Link to="/" className="ps-logo text-link"><img src="assets/images/logo-white.png" alt=""/></Link>
                        <h3 className="ps-widget__title">Address Office 1</h3>
                      </header>
                      <footer>
                        <p><strong>460 West 34th Street, 15th floor, New York</strong></p>
                        <p>Email: <Link className='text-link' to='/mailto:support@store.com'>support@store.com</Link></p>
                        <p>Phone: +323 32434 5334</p>
                        <p>Fax: ++323 32434 5333</p>
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--info second">
                      <header>
                        <h3 className="ps-widget__title">Address Office 2</h3>
                      </header>
                      <footer>
                        <p><strong>PO Box 16122 Collins  Victoria 3000 Australia</strong></p>
                        <p>Email: <Link className='text-link' to='/mailto:support@store.com'>support@store.com</Link></p>
                        <p>Phone: +323 32434 5334</p>
                        <p>Fax: ++323 32434 5333</p>
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--link">
                      <header>
                        <h3 className="ps-widget__title">Find Our store</h3>
                      </header>
                      <footer>
                        <ul className="ps-list--link">
                          <li><Link className='text-link' to="#">Coupon Code</Link></li>
                          <li><Link className='text-link' to="#">SignUp For Email</Link></li>
                          <li><Link className='text-link' to="#">Site Feedback</Link></li>
                          <li><Link className='text-link' to="#">Careers</Link></li>
                        </ul>
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--link">
                      <header>
                        <h3 className="ps-widget__title">Get Help</h3>
                      </header>
                      <footer>
                        <ul className="ps-list--line">
                          <li><Link className='text-link'  to="#">Order Status</Link></li>
                          <li><Link className='text-link' to="#">Shipping and Delivery</Link></li>
                          <li><Link className='text-link' to="#">Returns</Link></li>
                          <li><Link className='text-link' to="#">Payment Options</Link></li>
                          <li><Link className='text-link' to="#">Contact Us</Link></li>
                        </ul>
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--link">
                      <header>
                        <h3 className="ps-widget__title">Products</h3>
                      </header>
                      <footer>
                        <ul className="ps-list--line">
                          <li><Link className='text-link' to="#">Shoes</Link></li>
                          <li><Link className='text-link' to="#">Clothing</Link></li>
                          <li><Link className='text-link' to="#">Accessries</Link></li>
                          <li><Link className='text-link'  to="#">Football Boots</Link></li>
                        </ul>
                      </footer>
                    </aside>
                  </div>
            </div>
          </div>
        </div>
        <div className="ps-footer__copyright">
          <div className="ps-container">
            <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <p>&copy; <Link className='text-link' to="#">SKYTHEMES</Link>, Inc. All rights Resevered. Design by <Link className='text-link' to="#"> Alena Studio</Link></p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <ul className="ps-social">
                      <li><Link className='text-link' to="#"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link className='text-link' to="#"><i className="fa fa-google-plus"></i></Link></li>
                      <li><Link className='text-link' to="#"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link className='text-link' to="#"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
      </div>
            </main>
        )
    }
}
export default Footer;