import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import ContactInfo from '../components/TEA/ContactInfo';
import ContactForm from '../components/TEA/ContactForm';
import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Contact us " 
                /> 
                <ContactInfo/>
                <ContactForm/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;