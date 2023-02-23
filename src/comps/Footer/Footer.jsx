import React from 'react';
import './footer.scss';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className='row'>
          <div className="item col-md-3">
            <h1>Services</h1>
            <p>Apps</p>
            <p>Games</p>
            <p>Accessories</p>
            <p>Movies</p>
            <p>Latest Updates</p>
          </div>
          <div className="item col-md-3">
            <h1>Help</h1>
            <p>Contact Us</p>
            <p>Help</p>
            <p>Updates</p>
            <p>About Us</p>
            <p>Cookies</p>
          </div>
          <div className="item col-md-3">
            <h1>Privacy Policy</h1>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Gift Card</p>
            <p>Documentation</p>
            <p>State Laws</p>
          </div>
          <div className="item col-md-3">
            <h1>Play Store Policy</h1>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p className="logo">PLAY STORE</p>
          <h1 className="copyright">
            Copyright © 2022 Google Inc. All rights reserved.
          </h1>
        </div>
        
      </div>
    </div>
  )
}
