import React, { Component } from 'react';
import Link from 'next/link';

import BlogPagination from '../TEA/BlogPagination'

class BlogItemAndNumbers extends Component {
    render() {

        let { numberOfBlogItems , classesToAddToSection } = this.props;

        return (
            
            <div className="row">

                {/* Blog items loop */}
                {/* you can use react code to loop these X number of times, I have added theme here as static data */}

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





                <BlogPagination/>




            </div>
                
        );
    }
}

export default BlogItemAndNumbers;
