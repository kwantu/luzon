import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <footer className="footer-section ptb-100">
                    <div className="container">
                        <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <h5>Sign Up To Our Newsletter</h5>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <form className="newsletter-form">
                                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" required />
                                        <button type="submit">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-sm-4">
                                <div className="single-footer-widget">
                  
                                    <ul className="footer-social">
                                    <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-phone-call"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <br className="mt-5 d-block d-sm-none"></br>
                                <h5>About Us</h5>
                                <p>
                                    <Link href="#">
                                    <a target="_blank">Our Technology</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                    <a target="_blank">Products</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                    <a target="_blank">Contact Us</a>
                                    </Link>
                                </p>
                            </div>

                            <div className="col-sm-4">
                                <br className="mt-5 d-block d-sm-none"></br>
                                <br className="mt-5 d-block d-sm-none"></br>
                                <h5>Contact Us</h5>
                                <p>
                                    <Link href="#">
                                    <a target="_blank">hello@kwantu.com</a>
                                    </Link>
                                </p>
                                <p>012 345 6789</p>
                                <p>+24 56 789 506</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </footer>

                {/* Copyright area  - hidden */}
                <div className="copyright-area d-none">
                    <div className="container">
                        <div className="copyright-area-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <p>
                                        Copyright @{currentYear}. All Rights Reserved.
                                    </p>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms &amp; Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;