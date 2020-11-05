import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import BlogPageComponent from '../components/TEA/BlogPageComponent';
import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Blog" 
                /> 
                <BlogPageComponent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;