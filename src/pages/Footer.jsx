import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1: About Us */}
          <div className="col-md-4 mb-4">
            <h5>About For Fresher</h5>
            <p>
              We provide the best in fashion with a focus on quality and style. Join us for the latest trends and timeless designs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list">
              <li><a href="/" >Home</a></li>
              <li><a href="/product" >Product</a></li>
              <li><a href="/pricing" >Pricing</a></li>
              <li><a href="/resources" >Resources</a></li>
              <li><a href="/jobseekers" >JobSeekers</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className=" mx-2"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className=" mx-2"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className=" mx-2"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className=" mx-2"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {/* Copyright Section */}
          <div className="col-12 text-center">
            <p>&copy; 2024 For Fresher. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

