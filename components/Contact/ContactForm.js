import React, { Component } from 'react';
import Link from 'next/link';

class ContactForm extends Component {
    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="contact-text">
                        <h3>Have Any Questions About Us?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore </p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input type="text" name="name" id="name" className="form-control" required placeholder="User Name" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Subject" />
                                    </div>
                                
                                    <div className="form-group">
                                        <label>Message</label>
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

                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={require("../../images/contact.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;