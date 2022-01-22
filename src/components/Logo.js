import React from 'react';
import { Link } from 'react-router-dom';

 function Logo() {
    return (
        <>
          <div className="navigation__column left">
            <div className="header__logo"><Link to ='/' className="ps-logo" ><img src="assets/images/logo.png" alt=""/></Link></div>
          </div>
        </>
    )
}
export default Logo;