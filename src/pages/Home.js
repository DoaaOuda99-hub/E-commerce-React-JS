import React, { Component } from 'react'
import Products from '../components/Products/Products';

 class Home extends Component {

    render() {
        return (
    <main className="ps-main">
      <Products/>
      {/* <TopSales/> */}
      <div className="ps-home-contact">
        <div id="contact-map" data-address="New York, NY" data-title="BAKERY LOCATION!" data-zoom="17"></div>
        <div className="ps-home-contact__form">
          <header>
            <h3>Contact Us</h3>
            <p>Learn about our company profile, communityimpact, sustainable motivation, and more.</p>
          </header>
          <footer>
            <form action="/product-listing" method="post">
              <div className="form-group">
                <label>Name<span>*</span></label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label>Email<span>*</span></label>
                <input className="form-control" type="email"/>
              </div>
              <div className="form-group">
                <label>Your message<span>*</span></label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <div className="form-group text-center">
                <button className="ps-btn">Send Message<i className="fa fa-angle-right"></i></button>
              </div>
            </form>
          </footer>
        </div>
      </div>
      <div className="ps-subscribe">
        <div className="ps-container">
          <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                  <h3><i className="fa fa-envelope"></i>Sign up to Newsletter</h3>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                  <form className="ps-subscribe__form" action="do_action" method="post">
                    <input className="form-control" type="text" placeholder=""/>
                    <button>Sign up now</button>
                  </form>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                  <p>...and receive  <span>$20</span>  coupon for first shopping.</p>
                </div>
          </div>
        </div>
      </div>
    </main>
        )
    }
}
export default Home;