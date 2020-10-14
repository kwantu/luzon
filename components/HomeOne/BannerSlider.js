import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: true,
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
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Make Real-Life Connections With IT
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.
                                                </p>
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="default-btn">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                
                                                <img src={require("../../images/home-one/home-1-img1.png")} className="banner-img" alt="image" />
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