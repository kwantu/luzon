import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import ProductPageComponent from '../components/TEA/ProductPageComponent';
import InAction from '../components/TEA/InAction';
import PricingPageComponent from '../components/TEA/PricingPageComponent';
import Footer from '../components/TEA/Footer';
import TabsWithHeadings from '../components/TEA/TabsWithHeadings';



class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Products" 
                /> 
                <ProductPageComponent/>
                <TabsWithHeadings
                    classesToAddToSection="bg-mint bg-bottom-curve "
                    tabHoverStyle="dark"
                />
                <InAction/>
                <PricingPageComponent
                    classesToAddToSection="bg-mint"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;