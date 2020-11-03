import React, { Component } from 'react';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import PageBanner from '../components/Common/PageBanner';
import ThreeColumnsWithImage from '../components/TEA/ThreeColumnsWithImage';
import TwoByThreeColumnsWithImage from '../components/TEA/TwoByThreeColumnsWithImage';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Our Approach" 
                /> 
                <ThreeColumnsWithImage/>
                <TwoByThreeColumnsWithImage
                    classesToAddToSection="bg-mint bg-bottom-curve"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;