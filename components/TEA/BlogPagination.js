import React, { Component } from 'react';
import Link from 'next/link';

class BlogPagination extends Component {
    render() {

        return (
            
                <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <Link href="#">
                                <a className="prev page-numbers">
                                    <i className="flaticon-left"></i>
                                </a>
                            </Link>

                            <Link href="#">
                                <a className="page-numbers">1</a>
                            </Link>

                            <span className="page-numbers current" aria-current="page">2</span>

                            <Link href="#">
                                <a className="page-numbers">3</a>
                            </Link>

                            <Link href="#">
                                <a className="page-numbers">4</a>
                            </Link>

                            <Link href="#">
                                <a className="next page-numbers">
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                </div>

         
                
        );
    }
}

export default BlogPagination;
