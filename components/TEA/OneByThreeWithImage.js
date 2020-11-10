import React, { Component } from 'react';
import Link from 'next/link';

class OneByThreeWithImage extends Component {
    render() {

        let { classesToAddToSection } = this.props;

        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <img src={require("../../images/infographics/our_focus_areas_infographic.png")} alt="image" />
                            </div>
                            <div className="col-lg-8">
                                <p>We are specialist technology implementers. We only focus on working in the areas, and this has given us the opportunity to bring totally new ideas to fruition. The kwantu platform allows organisations to work on their own focus, from the strategic management and reporting of performance, down to operational data, or citizen generated data that feeds in one platform. Yet configured to meet the specific needs of each client. These focus areas are all integrated into one solution. From getting feedback from citizens, to managing applications for support from citizens captured on their mobile devices, to reporting on the overall programme performance
</p>
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default OneByThreeWithImage;