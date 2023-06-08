import React from 'react'
import img1 from "../../img/core-img/curve.png"
import img2 from "../../img/bg-img/18.jpg"
import img3 from "../../img/bg-img/19.jpg"
import img4 from "../../img/bg-img/20.jpg"

const WelcomeArea = () => {
  return (
    <>
        <section className="welcome-area">
    <div className="welcome-slides owl-carousel">

      <div className="single-welcome-slide">
        <div className="bg-curve" style={{ backgroundImage: `url(${img1})`}}></div>
        <div className="main-bg-img bg-img" data-animation="fadeInUpBig" data-delay="200ms" style={{ backgroundImage: `url(${img2})`}}></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="welcome-text">
                <h2 data-animation="bounceInUp" data-delay="400ms">Jesse <br/>
                  Edwards</h2>
                <h5 data-animation="bounceInUp" data-delay="600ms">Star Model 2019</h5>
                <a href="#" className="btn" data-animation="bounceInUp" data-delay="800ms">Model details <i className="arrow_right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="social-info">
          <a href="#" data-animation="bounceInDown" data-delay="1000ms"><i className="fa fa-facebook"></i> <span>Facebook</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1100ms"><i className="fa fa-twitter"></i> <span>Twitter</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1200ms"><i className="fa fa-instagram"></i> <span>Instagram</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1300ms"><i className="fa fa-youtube-play"></i> <span>Youtube</span></a>
        </div>
        <div className="slide-pager">
          <a href="#">Next: Naznin Niloy</a>
        </div>
      </div>

      <div className="single-welcome-slide">
        <div className="bg-curve" style={{ backgroundImage: `url(${img1})`}}></div>
        <div className="main-bg-img bg-img" data-animation="fadeInUpBig" data-delay="200ms" style={{ backgroundImage: `url(${img3})`}}></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="welcome-text">
                <h2 data-animation="bounceInUp" data-delay="400ms">Naznin <br/>
                  Niloy</h2>
                <h5 data-animation="bounceInUp" data-delay="600ms">Star Model 2019</h5>
                <a href="#" className="btn" data-animation="bounceInUp" data-delay="800ms">Model details <i className="arrow_right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="social-info">
          <a href="#" data-animation="bounceInDown" data-delay="1000ms"><i className="fa fa-facebook"></i> <span>Facebook</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1100ms"><i className="fa fa-twitter"></i> <span>Twitter</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1200ms"><i className="fa fa-instagram"></i> <span>Instagram</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1300ms"><i className="fa fa-youtube-play"></i> <span>Youtube</span></a>
        </div>
        <div className="slide-pager">
          <a href="#">Next: Shaila Ritu</a>
        </div>
      </div>

      <div className="single-welcome-slide">
        <div className="bg-curve" style={{ backgroundImage: `url(${img1})`}}></div>
        <div className="main-bg-img bg-img" data-animation="fadeInUpBig" data-delay="200ms" style={{ backgroundImage: `url(${img4})`}}></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="welcome-text">
                <h2 data-animation="bounceInUp" data-delay="400ms">Shaila <br/>
                  Ritu</h2>
                <h5 data-animation="bounceInUp" data-delay="600ms">Star Model 2019</h5>
                <a href="#" className="btn" data-animation="bounceInUp" data-delay="800ms">Model details <i className="arrow_right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="social-info">
          <a href="#" data-animation="bounceInDown" data-delay="1000ms"><i className="fa fa-facebook"></i> <span>Facebook</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1100ms"><i className="fa fa-twitter"></i> <span>Twitter</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1200ms"><i className="fa fa-instagram"></i> <span>Instagram</span></a>
          <a href="#" data-animation="bounceInDown" data-delay="1300ms"><i className="fa fa-youtube-play"></i> <span>Youtube</span></a>
        </div>
        <div className="slide-pager">
          <a href="#">Next: Jesse Edwards</a>
        </div>
      </div>

    </div>
  </section>
    </>
  )
}

export default WelcomeArea