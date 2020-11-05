import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import OneByThreeWithImage from '../components/TEA/OneByThreeWithImage';
import TabsWithIconsClone from '../components/TEA/TabsWithIconsClone';
import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Our focus areas" 
                /> 
                <OneByThreeWithImage/>
                <TabsWithIconsClone
                    classesToAddToSection="bg-mint bg-bottom-curve"
                    tabHoverStyle="dark"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;