import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-area section-padding-80-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="single-footer-widget mb-60">
                <a href="#" className="d-block mb-4">
                  <img src="./img/core-img/logo.png" alt="" />
                </a>
                <p>
                  Integer vehicula mauris libero, at molestie eros imperdiet sit
                  amet. Suspendisse mattis ante sit amet ante.
                </p>
                <div className="copywrite-text">
                  <p>
                    &copy; Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="single-footer-widget mb-60">
                <h4 className="widget-title">Our Link</h4>

                <nav>
                  <ul className="our-link">
                    <li>
                      <a href="#">New Faces</a>
                    </li>
                    <li>
                      <a href="#">Model Of the Week</a>
                    </li>
                    <li>
                      <a href="#">Classic Women</a>
                    </li>
                    <li>
                      <a href="#">Privacy Terms</a>
                    </li>
                    <li>
                      <a href="#">Classic Men</a>
                    </li>
                    <li>
                      <a href="#">Conditions</a>
                    </li>
                    <li>
                      <a href="#">Hair & Styles</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-xl-3">
              <div className="single-footer-widget mb-60">
                <h4 className="widget-title">Contact</h4>
                <div className="footer-content mb-30">
                  <h4>+01-3-8888-6868</h4>
                  <h6>40 Baria Sreet 133/2 NewYork City</h6>
                </div>
                <div className="footer-social-info">
                  <a
                    href="#"
                    className="facebook"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="twitter"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="pinterest"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Pinterest"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a
                    href="#"
                    className="instagram"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="youtube"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="YouTube"
                  >
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
