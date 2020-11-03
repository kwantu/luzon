import React, { Component } from 'react';
import Link from 'next/link';

class TwoByThreeColumnsWithImage extends Component {
    render() {

        let { classesToAddToSection } = this.props;

        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                               <br className="mt-5"></br>
                               <ul className="red-arrow-list">
                                   <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                   <li>Lorem ipsum dolor sit amet, consectetur</li>
                                   <li>Lorem ipsum dolor sit amet, consectetur</li>
                                   <li>Lorem ipsum dolor sit amet, consectetur</li>
                               </ul>
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

                            <div className="col-lg-4">
                                <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default TwoByThreeColumnsWithImage;