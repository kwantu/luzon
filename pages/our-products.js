import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import ProductPageComponent from '../components/TEA/ProductPageComponent';
import TabsWithHeadings from '../components/TEA/TabsWithHeadings';
import InAction from '../components/TEA/InAction';
import Footer from '../components/TEA/Footer';



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
                    classesToAddToSection="bg-mint bg-bottom-curve"
                    tabHoverStyle="dark"
                    classesToAddToTabsUL="product-tabs height-350 tabs-with-margin"
                />
                <InAction/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;