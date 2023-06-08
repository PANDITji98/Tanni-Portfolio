import React from "react";
import curveImg from "../../assets/core-img/curve.png"
import "./header.css"

const Header = () => {
  return (
    <>
      <header className="header-area">
        <div className="main-header-area"></div>
        <div className="classy-nav-container breakpoint-off">
          <nav className="classy-navbar justify-content-between" id="monaNav">
            <div
              className="bg-curve"
              style={{backgroundImage: `url(${curveImg})`}}
            ></div>

            <a className="nav-brand" href="index.html">
              <img src="./img/core-img/logo.png" alt="" />
            </a>

            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>
              <div className="classynav">
                <ul id="nav">
                  <li className="current-item">
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./index.html">- Home</a>
                      </li>
                      <li>
                        <a href="./about.html">- About Us</a>
                      </li>
                      <li>
                        <a href="./projects.html">- Projects</a>
                      </li>
                      <li>
                        <a href="./models.html">- Models</a>
                      </li>
                      <li>
                        <a href="./casting.html">- Casting</a>
                      </li>
                      <li>
                        <a href="./blog.html">- Blog</a>
                      </li>
                      <li>
                        <a href="./single-blog.html">- Blog Details</a>
                      </li>
                      <li>
                        <a href="./contact.html">- Contact</a>
                      </li>
                      <li>
                        <a href="#">- Dropdown</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">- Dropdown Item</a>
                          </li>
                          <li>
                            <a href="#">- Dropdown Item</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">- Even Dropdown</a>
                              </li>
                              <li>
                                <a href="#">- Even Dropdown</a>
                              </li>
                              <li>
                                <a href="#">- Even Dropdown</a>
                              </li>
                              <li>
                                <a href="#">- Even Dropdown</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">- Dropdown Item</a>
                          </li>
                          <li>
                            <a href="#">- Dropdown Item</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./projects.html">Project</a>
                  </li>
                  <li>
                    <a href="./models.html">Models</a>
                  </li>
                  <li>
                    <a href="./casting.html">Casting</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./blog.html">- Blog</a>
                      </li>
                      <li>
                        <a href="./single-blog.html">- Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>

                <div
                  className="search-icon"
                  data-toggle="modal"
                  data-target="#searchModal"
                >
                  <i className="icon_search"></i>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
