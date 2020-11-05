import React, { Component } from 'react';
import Link from 'next/link';

class BlogPost extends Component {
    render() {
        return (
                <section className="development-area ptb-100 bg-mint bg-bottom-curve">
                <div className="container">
                    <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center">Learn more about how we work</h2> 
                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                            </div>
                        </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 px-4">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img className="rounded-top" src={require("../../images/stock/stock-laptop.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content bg-white">
                                    <span>20 January 2021</span>
                                    <h4>Lorem ipsum dolor sit</h4>
                                    <p>amet, consectetur adipiscing elit sed do eiusmod tempor ...</p>

                                </div>
                                <div className="banner-btn animated fadeInUp">
                                    <Link href="/">
                                        <a className="default-btn w-100 rounded-0 rounded-bottom d-block text-center">
                                            Find out more
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 px-4">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img className="rounded-top" src={require("../../images/stock/stock-laptop.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content bg-white">
                                    <span>20 January 2021</span>
                                    <h4>Lorem ipsum dolor sit</h4>
                                    <p>amet, consectetur adipiscing elit sed do eiusmod tempor ...</p>

                                </div>
                                <div className="banner-btn animated fadeInUp">
                                    <Link href="/">
                                        <a className="default-btn w-100 rounded-0 rounded-bottom d-block text-center">
                                            Find out more
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 px-4">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img className="rounded-top" src={require("../../images/stock/stock-laptop.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content bg-white">
                                    <span>20 January 2021</span>
                                    <h4>Lorem ipsum dolor sit</h4>
                                    <p>amet, consectetur adipiscing elit sed do eiusmod tempor ...</p>

                                </div>
                                <div className="banner-btn animated fadeInUp">
                                    <Link href="/">
                                        <a className="default-btn w-100 rounded-0 rounded-bottom d-block text-center">
                                            Find out more
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default BlogPost;