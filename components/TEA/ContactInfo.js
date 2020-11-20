import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-box pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box">
                                <i className="flaticon-pin"></i>
                                <div className="content-title">
                                    <h4>Address</h4>
                                    <p>100 Street Avenue, <br></br>Big City, 1234</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box">
                                <i className="flaticon-envelope"></i>
                                <div className="content-title">
                                    <h4>Email</h4>
                                    <p>hello@company.com</p>
                                    <p>help@company.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-contact-box">
                                <i className="flaticon-phone-call"></i>
                                <div className="content-title">
                                    <h4>Phone</h4>
                                    <p>123 456 7890</p>
                                    <p>123 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;