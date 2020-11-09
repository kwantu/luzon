import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import TwoColumnsWithImage from '../components/TEA/TwoColumnsWithImage';
import TabsWithText from '../components/TEA/TabsWithText';
import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Technology" 
                /> 
                <TwoColumnsWithImage/>
                <TabsWithText
                    classesToAddToSection="bg-mint bg-bottom-curve"
                    classesToAddToRedList="height-150"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;