import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import CartBtn from "./Cart/CartBtn";

function Header() {
  return (
    <>
      <div className="header--sidebar"></div>
      <header className="header">
        <div className="header__top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                <p>
                  460 West 34th Street, 15th floor, New York - Hotline:
                  804-377-3580 - 804-399-3580
                </p>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                <div className="header__actions">
                  <Link className="text-link" to="#">
                    Login & Regiser
                  </Link>
                  <div className="btn-group ps-dropdown">
                    <Link
                      className="dropdown-toggle text-link"
                      to="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      USD<i className="fa fa-angle-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="text-link" to="#">
                          <img src="assets/images/flag/usa.svg" alt="" /> USD
                        </Link>
                      </li>
                      <li>
                        <Link className="text-link" to="#">
                          <img src="assets/images/flag/singapore.svg" alt="" />{" "}
                          SGD
                        </Link>
                      </li>
                      <li>
                        <Link className="text-link" to="#">
                          <img src="assets/images/flag/japan.svg" alt="" /> JPN
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group ps-dropdown">
                    <Link
                      className="dropdown-toggle text-link"
                      to="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Language<i className="fa fa-angle-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="text-link" to="#">
                          English
                        </Link>
                      </li>
                      <li>
                        <Link className="text-link" to="#">
                          Japanese
                        </Link>
                      </li>
                      <li>
                        <Link className="text-link" to="#">
                          Chinese
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation">
          <div className="container-fluid">
            <Logo />
            <div className="navigation__column center">
              <ul className="main-menu menu">
                <li className="menu-item">
                  <Link className="text-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="text-link" to="/products">
                    Products
                  </Link>
                </li>

                <li className="menu-item menu-item-has-children dropdown">
                  <Link className="text-link" to="#">
                    Contact
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link className="text-link" to="/contact-us-1">
                        Contact Us #1
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="text-link" to="/contact-us-2">
                        Contact Us #2
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="navigation__column right">
              <Search />
              <CartBtn />
            </div>
          </div>
        </nav>
        <div className="header-services">
          <div
            className="ps-services owl-slider"
            data-owl-auto="true"
            data-owl-loop="true"
            data-owl-speed="7000"
            data-owl-gap="0"
            data-owl-nav="true"
            data-owl-dots="false"
            data-owl-item="1"
            data-owl-item-xs="1"
            data-owl-item-sm="1"
            data-owl-item-md="1"
            data-owl-item-lg="1"
            data-owl-duration="1000"
            data-owl-mousedrag="on"
          >
            <p className="ps-service">
              <i className="ps-icon-delivery"></i>
              <strong>Free delivery</strong>: Get free standard delivery on
              every order with Sky Store
            </p>
            <p className="ps-service">
              <i className="ps-icon-delivery"></i>
              <strong>Free delivery</strong>: Get free standard delivery on
              every order with Sky Store
            </p>
            <p className="ps-service">
              <i className="ps-icon-delivery"></i>
              <strong>Free delivery</strong>: Get free standard delivery on
              every order with Sky Store
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
