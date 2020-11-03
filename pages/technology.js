import React, { Component } from 'react';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import PageBanner from '../components/Common/PageBanner';
import TwoColumnsWithImage from '../components/TEA/TwoColumnsWithImage';
import KeyFeatures from '../components/TEA/KeyFeatures';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Technology" 
                /> 
                <TwoColumnsWithImage/>
                <KeyFeatures
                    classesToAddToSection="bg-mint bg-bottom-curve"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;