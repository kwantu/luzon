import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class BannerSlider extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="main-banner-area">
                {this.state.display ? <OwlCarousel 
                    className="home-sliders owl-carousel owl-theme"
                    {...options}
                >
                    
                    <div className="home-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <p className={isVisible ? "animated fadeInUp red-dot-at-end-of-text" : ''}>
                                                    Kwantu is a social exterprise that combines our experience of programme methodologies with 
                                                    technology and data to help make local development work better
                                                </p>
                                                <div className={`banner-btn ${isVisible ? "animated fadeInUp" : ''}`}>
                                                    <Link href="/">
                                                        <a className="default-btn">
                                                            Find Out More
                                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <p className={isVisible ? "animated fadeInUp red-dot-at-end-of-text" : ''}>
                                                    Kwantu is a social exterprise that combines our experience of programme methodologies with 
                                                    technology and data to help make local development work better
                                                </p>
                                                <div className={`banner-btn ${isVisible ? "animated fadeInUp" : ''}`}>
                                                    <Link href="/">
                                                        <a className="default-btn">
                                                            Button Two
                                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <p className={isVisible ? "animated fadeInUp red-dot-at-end-of-text" : ''}>
                                                    Kwantu is a social exterprise that combines our experience of programme methodologies with 
                                                    technology and data to help make local development work better
                                                </p>
                                                <div className={`banner-btn ${isVisible ? "animated fadeInUp" : ''}`}>
                                                    <Link href="/">
                                                        <a className="default-btn">
                                                            Button Three
                                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default BannerSlider;