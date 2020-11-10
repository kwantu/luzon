import React, { Component } from 'react';
import Link from 'next/link';

class ImageThenTwoColumns extends Component {
    render() {

        let { classesToAddToSection } = this.props;


        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto d-block pb-100">
                                <img className="" src={require("../../images/infographics/our_approach_infographic.png")} alt="image" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                               <p>Kwantu brings a unique combination of a deep understanding of the latest technology and how it can be applied to improve development practice with a thorough understanding of the nature of the development context in which we work.</p>
                               <p>We are development practitioners that have spent most of our working careers in applying technology to the development context in which we found ourselves. From applying new knowledge management tools to fight the global HIV pandemic, to developing programme management tools to manage and pay hundreds of thousands of temporary community workers that had no source of income.</p>
                            </div>

                            <div className="col-lg-6">
                               <p>A recent client commented on the value that this brought to their organisation. The understanding of the processes and tools to assist saved them vast amounts of time and resources in standardising their reporting processes and having the data electronically at hand. Importantly, the tools interfaced nicely with the way in which they engaged with their communities and the processes that were followed to engage citizens in reviewing the services of their health and education facilities.</p>
                            </div>
                        </div>     
                    </div>
                </section>





                

            </div>

                
        );
    }
}

export default ImageThenTwoColumns;