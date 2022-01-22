import React, { Component } from 'react'

export default class Contact2 extends Component {
    render() {
        return (
            <div>
                <div className="header-services">
      <div className="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
        <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
        <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
        <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
      </div>
    </div>
    <main className="ps-main">
      <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
        <div className="ps-container">
          <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                  <div className="ps-section__header pt-50">
                    <h2 className="ps-section__title" data-mask="Contact">- Get in touch</h2>
                    <form className="ps-contact__form" action="do_action" method="post">
                      <div className="form-group">
                        <label>Name <sub>*</sub></label>
                        <input className="form-control" type="text" placeholder=""/>
                      </div>
                      <div className="form-group">
                        <label>Email <sub>*</sub></label>
                        <input className="form-control" type="email" placeholder=""/>
                      </div>
                      <div className="form-group mb-25">
                        <label>Your Message <sub>*</sub></label>
                        <textarea className="form-control" rows="6"></textarea>
                      </div>
                      <div className="form-group">
                        <button className="ps-btn">Send Message<i className="ps-icon-next"></i></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                  <div id="contact-map" data-address="New York, NY" data-title="Sky Store!" data-zoom="17"></div>
                </div>
          </div>
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
            </div>
        )
    }
}
