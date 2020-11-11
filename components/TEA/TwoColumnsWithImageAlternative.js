import React, { Component } from 'react';
import Link from 'next/link';

class TwoColumnsWithImageAlternative extends Component {
    render() {

        let { classesToAddToSection } = this.props;

        return (
            
            <div>
                <section className={ " " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <h2 className="smallFont">Ut labo. Ut doluptasim</h2><h2 className="smallFont">facesequam facculpa qui sum.</h2>
                                <p>Quunti aut eumque prepres ium ra doluptusam, quo endipsus dolupta.</p>
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

                            <div className="col-lg-2">
                            </div>

                            <div className="col-lg-5">
                                <img src={require("../../images/green-placeholder-block.png")} alt="image" />
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default TwoColumnsWithImageAlternative;