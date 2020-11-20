import React, { Component } from 'react';
import Link from 'next/link';

class TwoByThreeColumnsWithImage extends Component {
    render() {

        let { classesToAddToSection } = this.props;

        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h2>Benefits of our specialist focus</h2>
                                <p>The benefits of our specialist focus gives us an understanding of what technical solutions there are that can support and improve the processes and methodologies of your organisation or government department. And we have the capacity to analyse and understand how information technology can be applied to transform the way in which you work leading to. </p>
                                <br className="mt-5"></br>
                                <ul className="red-arrow-list">
                                   <li>Innovative approaches and solutions driven by our understanding of the key constraints that the client faces</li>
                                   <li>More cost effective - low code options</li>
                                   <li>Lower risk - with the ability to configure the solutions to </li>
                                   <li>Benefit from the learning of others</li>
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

                            <div className="col-lg-5">
                                <img src={require("../../images/infographics/our_approach_infographic2.png")} alt="image" />
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default TwoByThreeColumnsWithImage;