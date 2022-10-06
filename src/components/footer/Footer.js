import React from "react";
import "./footer.css";
import IMG from "../../assests/delicious2.png";
import { BsFacebook } from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {GrMail} from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
      <div className="footer__img">
        <img src={IMG} />
      </div>

      <div className="footer__content">
        <h2>Search For Your Favourite Recipes</h2>
      </div>
      <div className='footer__copyright'>&copy; Recipe Finder. All right reserved</div>
      {/* <div className="footer__icons">
       <h3><BsFacebook/>
        <BsYoutube/>
        <GrMail/>
        </h3>
      </div> */}
    </div>
  );
};

export default Footer;
