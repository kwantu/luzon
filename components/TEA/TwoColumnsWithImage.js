import React, { Component } from 'react';
import Link from 'next/link';

class TwoColumnsWithImage extends Component {
    render() {

        let { classesToAddToSection } = this.props;

        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>New architecture for development</h2>
                                <p>Development involves doing things differently at various levels and across multiple organisational domains. From strategic planning, monitoring and reporting, through effective programme management and project implementation to effective operational interaction with beneficiaries and implementers on the ground. Across national to provincial government boundaries interacting with civil society organisations, business and communities.</p>
                                <p>This has to be done in a manner that is cost effective, easy to use, works in areas where people are with poor networks … and that integrates with existing data and solutions.
                                <br></br>
                                Kwantu has been working in this field for 25 years, and has identified a new architecture, leveraging the most recent open source building blocks that could address all these areas. This architecture is free and available to use under an open source license so that the creative synergies to foster effective development be enabled.</p>
                                <p>We have designed the kwantu platform as a technical foundation to make this possible. </p>
                            </div>
                            <div className="col-lg-6">
                                <img src={require("../../images/green-placeholder-block.png")} alt="image" />
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default TwoColumnsWithImage;