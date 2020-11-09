import React, { Component } from 'react';
import Link from 'next/link';

class InAction extends Component {
    render() {

        let { pageTitle } = this.props;
        
        return (
            <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }> 
                <div className="container">
                    <h2>See our Performance app in action.</h2>
                    <br></br>
                    <div className="row">
                        <div className="col"><img src={require("../../images/infographics/product_infographic.png")} alt="image" /></div>
                        <div className="col"><img src={require("../../images/infographics/product_infographic.png")} alt="image" /></div>
                        <div className="col"><img src={require("../../images/infographics/product_infographic.png")} alt="image" /></div>
                        <div className="col"><img src={require("../../images/infographics/product_infographic.png")} alt="image" /></div>
                        <div className="col"><img src={require("../../images/infographics/product_infographic.png")} alt="image" /></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InAction;