import React, { Component } from 'react';
import Link from 'next/link';

import BlogItemAndNumbers from './BlogItemAndNumbers'

class BlogPageComponent extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {


        let { classesToAddToSection, classesToAddToRedList } = this.props;

        return (
                <section className={ "development-area ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="">Categories</h2> 
                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                                <br className="mt-5"></br>
                            </div>
                        </div>    
                    </div>

                    
                    { /* this is a clone of the container div in /components/TEA/TabsWithText.js*/ }
                    <div className="container">

                        <div className="tab schedule-list-tab">
                            <ul className={"tabs-red equal-widths-parent px-0 " + ( this.props.classesToAddToRedList )}>
                                <div>
                                    <li className="current" onClick={(e) => this.openTabSection(e, 'tab1')}> 
                                        <h5>Innovation lab</h5>
                                    </li>
                                </div>
                                
                                <div>
                                    <li className="" onClick={(e) => this.openTabSection(e, 'tab2')}> 
                                        <h5>Impact stories</h5>
                                    </li>
                                </div>
                                
                                <div>
                                    <li className="" onClick={(e) => this.openTabSection(e, 'tab3')}> 
                                        <h5>Learning</h5>
                                    </li>
                                </div>

                                
                            </ul>

                            <br className="mt-5"></br>

                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <BlogItemAndNumbers/>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <BlogItemAndNumbers/>
                                </div>

                                <div id="tab3" className="tabs_item">
                                    <BlogItemAndNumbers/>
                                </div>

                              
    
                            </div>
                        </div>
                    </div>
                    { /* END clone of the container div in /components/TEA/TabsWithText.js*/ }




                    

                
            </section>
        );
    }
}

export default BlogPageComponent;