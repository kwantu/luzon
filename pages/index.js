import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeOne/BannerSlider';
import Features from '../components/HomeOne/Features';
import AboutUs from '../components/HomeOne/AboutUs';
import Services from '../components/HomeOne/Services';
import ServiceDevelopment from '../components/HomeOne/ServiceDevelopment';
import IntroVideo from '../components/HomeOne/IntroVideo';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import Projects from '../components/HomeOne/Projects';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <Features /> 
                <AboutUs />
                <Services />
                <ServiceDevelopment />
                <IntroVideo />
                <WhyChooseUs />
                <Projects />
                <FeedbackStyleOne />
                <BlogPost />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;