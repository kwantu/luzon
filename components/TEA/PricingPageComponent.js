import React, { Component } from 'react';
import Link from 'next/link';

class PricingPageComponent extends Component {
    render() {

        let { classesToAddToSection } = this.props;


        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row">
                            <h2>Pricing</h2>
                            <div className="spacerLarge"></div>
                            
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mx-xl-5 mb-sm-5 pricing-block">
                                    <div className="bg-gray-pricing">
                                        <h3>Basic</h3>
                                        <h3><span>Business Up</span></h3>
                                    </div>
                                    <div>
                                        <h3 className="h3alternative">RXXX <span>/mo</span></h3>
                                    </div>
                                    <div className="p-3">
                                        <ul className="red-pricing-list">
                                            <li>10 GB Hosting</li>
                                            <li>2 Unique Users</li>
                                            <li>12 GB Capacity</li>
                                            <li className="xmark">Anywhere Access</li>
                                            <li className="xmark">Weekly Backup</li>
                                            <li className="xmark">Support 24/Hour</li>
                                        </ul>
                                    </div>
                                    <div className="p-3">
                                        <div className="banner-btn animated fadeInUp">
                                            <Link href="/">
                                                <a className="default-btn">
                                                    BUY NOW
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                            <div className="mx-xl-5 mb-sm-5 pricing-block">
                                    <div className="bg-green">
                                        <h3>Standard</h3>
                                        <h3><span>Business Up</span></h3>
                                    </div>
                                    <div>
                                        <h3 className="h3alternative">RXXX <span>/mo</span></h3>
                                    </div>
                                    <div className="p-3">
                                        <ul className="red-pricing-list">
                                            <li>10 GB Hosting</li>
                                            <li>2 Unique Users</li>
                                            <li>12 GB Capacity</li>
                                            <li className="xmark">Anywhere Access</li>
                                            <li className="xmark">Weekly Backup</li>
                                            <li className="xmark">Support 24/Hour</li>
                                        </ul>
                                    </div>
                                    <div className="p-3">
                                        <div className="banner-btn animated fadeInUp">
                                            <Link href="/">
                                                <a className="default-btn">
                                                    BUY NOW
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                            <div className="mx-xl-5 mb-sm-5 pricing-block">
                                    <div className="bg-dark-green">
                                        <h3>Premium</h3>
                                        <h3><span>Business Up</span></h3>
                                    </div>
                                    <div>
                                        <h3 className="h3alternative">RXXX <span>/mo</span></h3>
                                    </div>
                                    <div className="p-3">
                                        <ul className="red-pricing-list">
                                            <li>10 GB Hosting</li>
                                            <li>2 Unique Users</li>
                                            <li>12 GB Capacity</li>
                                            <li className="xmark">Anywhere Access</li>
                                            <li className="xmark">Weekly Backup</li>
                                            <li className="xmark">Support 24/Hour</li>
                                        </ul>
                                    </div>
                                    <div className="p-3">
                                        <div className="banner-btn animated fadeInUp">
                                            <Link href="/">
                                                <a className="default-btn">
                                                    BUY NOW
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default PricingPageComponent;