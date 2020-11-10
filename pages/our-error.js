import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import ErrorElement from '../components/TEA/ErrorElement';
import Footer from '../components/TEA/Footer';

class Error extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ErrorElement />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Error;