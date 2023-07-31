import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="removeFooter fixed-bottom ">
      <footer className=" mw-180 footer navbar  d-flex justify-content-around">
        <div className="rowDiv">
          <div className="row1">
            <div className="row1Links">
              <strong>
                <span>Get Help</span>
              </strong>
              <ul>
                <li>Frequently Asked Questions</li>
                <li>Order Status</li>
              </ul>
            </div>
          </div>
          <div className="row2">
            <div className="row2Links">
              <strong>
                <span>About Us</span>
              </strong>
              <ul>
                <li>Careers</li>
                <li>Game Informer</li>
              </ul>
            </div>
          </div>
          {/* <div className="row3">
          <div className="row3Links">
           <strong><span>Legal Privacy</span></strong> 
            <ul>
              <li>Conditions of Use</li>
              <li>PowerUp Rewards Terms & Conditions</li>
             
 
            </ul>
          </div>
        </div> */}
          <div className="row4">
            <div className="row4Links">
              Sign Up Get Exclusive Promotions, Coupons, and the Latest Events
              <input
                type="text"
                placeholder="Search Site"
                className="searchBar"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
