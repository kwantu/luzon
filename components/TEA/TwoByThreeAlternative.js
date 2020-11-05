import React, { Component } from 'react';
import Link from 'next/link';

class TwoByThreeAlternative extends Component {
    render() {
        let { classesToAddToSection } = this.props;
        
        return (
            <div>
                <section className={ "development-area ptb-100 " + ( this.props.classesToAddToSection ) }> 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Our technology</h2>
                                <h3>A low-code technology platform designed  to help local development work better</h3>
                                <br className="mt-2"></br>
                                <h4>Benefits include:</h4>
                                <br className="mt-5"></br>
                            </div>

                        
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2">
                                        <img src={require("../../images/icons/icon1.png")} alt="image" />
                                    </div>
                                    <div className="col-10">
                                        <p>Faster and more cost effective than other alternatives</p>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                    <div className="col-10">
                                        <hr></hr>
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center">
                                    <div className="col-2">
                                        <img src={require("../../images/icons/icon2.png")} alt="image" />
                                    </div>
                                    <div className="col-10">
                                        <p>All apps are online and offline capable</p>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                    <div className="col-10">
                                        <hr></hr>
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center">
                                    <div className="col-2">
                                        <img src={require("../../images/icons/icon3.png")} alt="image" />
                                    </div>
                                    <div className="col-10">
                                        <p>A data centric architecture that provides the foundation for interoperability</p>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                    <div className="col-10">
                                        <hr></hr>
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center">
                                    <div className="col-2">
                                        <img src={require("../../images/icons/icon4.png")} alt="image" />
                                    </div>
                                    <div className="col-10">
                                        <p>Powerful reporting, dashboards and data analysis tools are built in</p>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                    <div className="col-10">
                                        <hr></hr>
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center">
                                    <div className="col-2">
                                        <img src={require("../../images/icons/icon5.png")} alt="image" />
                                    </div>
                                    <div className="col-10">
                                        <p>Comprehensive API to integrate with other systems and data sources</p>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                    <div className="col-10">
                                        <hr></hr>
                                    </div>
                                </div>

                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                                <div className="banner-btn animated fadeInUp">
                                    <Link href="/">
                                        <a className="default-btn">
                                            Find out more
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </div>

                            </div>
                            <div className="col-lg-4 pl-lg-5">
                                <img src={require("../../images/stock/motherboard.jpg")} alt="image" />
                            </div>
                        </div>
                        

                        
                        
                    </div>
                </section>





                <section className="ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Our approach</h2>
                                <h4>What makes us different</h4>
                                <br className="mt-5"></br>
                                <p>
                                    Kwantu has a deep understanding of programme methodologies. 
                                    We use this to analyse new methodologies and advise on how technology and data can better improve the impact of your work.
                                </p>
                                <br className="mt-5"></br>
                                    
                                <div className="banner-btn animated fadeInUp">
                                    <Link href="/">
                                        <a className="default-btn">
                                            Find out more
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={require("../../images/stock/stock-writing-with-marker.jpg")} alt="image" />
                            </div>
                        </div>               
                    </div>
                </section>

            </div>

                
        );
    }
}

export default TwoByThreeAlternative;