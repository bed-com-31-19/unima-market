import React from 'react';
import "./Footer.scss";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2.5" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="text-white">
                <address>
                  UNIMA Campus,
                  <br />
                  Zomba,
                  <br />
                  Malawi.
                </address>
                <a
                  href="tel: +265 888 234 314"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +265 888 234 314
                </a>
                <a
                  href="mailto: bed-com-31-19@unima.ac.mw"
                  className="mt-2 d-block mb-0 text-white"
                >
                  madzaloresten8@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="http://localhost:3000/" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="http://localhost:3000/" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href="http://localhost:3000/" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="http://localhost:3000/" className="text-white">
                    <BsTwitter className="fs-4" />
                  </a>
                  <a href="http://localhost:3000/" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-o">
                {" "}
                &copy; {new Date().getFullYear} programmer{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
