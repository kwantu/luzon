import React, { Component } from 'react';
import Link from 'next/link';

import BlogItemAndNumbers from './BlogItemAndNumbers'

class BlogPageComponentHome extends Component {
    render() {

        let { classesToAddToSection } = this.props;

        return (
                <section className={ "development-area ptb-100 " + ( this.props.classesToAddToSection ) }>
                <div className="container">
                    <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center">Learn more about how we work</h2> 
                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                            </div>
                        </div>

                    <BlogItemAndNumbers/>

                </div>
            </section>
        );
    }
}

export default BlogPageComponentHome; 