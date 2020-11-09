import React, { Component } from 'react';
import Link from 'next/link';

class ContactForm extends Component {
    render() {
        return (
            <section className="contact-section pb-100">
                <div className="container">
                    <div className="contact-text pb-5">
                        <h2>Have Any Questions About Us?</h2>
                        <h4>Lorem ipsum dolor sit amet consectetur adipscing elit sed eisdmad</h4>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="form-group">
                                        <label><h5>Name</h5></label>
                                        <input type="text" name="name" id="name" className="form-control" required placeholder="User Name" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label><h5>Email</h5></label>
                                        <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label><h5>Subject</h5></label>
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Subject" />
                                    </div>
                                
                                    <div className="form-group">
                                        <label><h5>Message</h5></label>
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" required  placeholder="Your Message"></textarea>
                                    </div>

                                    <div className="send-btn">
                                        <button type="submit" className="default-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;