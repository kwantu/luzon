import React, { Component } from 'react';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import BlogPost from '../components/Common/BlogPost';
import DigitalExperience from '../components/Common/DigitalExperience';
import BannerSlider from '../components/HomeOne/BannerSlider';
import ServiceDevelopment from '../components/HomeOne/ServiceDevelopment';
import Banner from '../components/HomeThree/Banner';

class KwantuHome extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <DigitalExperience />
                <ServiceDevelopment />
                <Banner />
                <BlogPost />
                <Footer />
                <Footer />
            </React.Fragment>
        );
    }
}

export default KwantuHome;