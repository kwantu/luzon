import React, { Component } from 'react';
import Link from 'next/link';

class TabsWithText extends Component {
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
        

        let { classesToAddToSection, heightClassForList } = this.props;

        return (
            
            <div>
                <section className={ "ptb-100 " + ( this.props.classesToAddToSection ) }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <h2>Key Features</h2>
                            </div>
                        </div>    
                        <div className="row">
                            
                        </div>     
                    </div>




                    <div className="container">

                        <div className="tab schedule-list-tab">
                            <ul className={"tabs-red equal-widths-parent px-0 " + ( this.props.classesToAddToTabsUL )}>
                                <div>
                                    <li className="current" onClick={(e) => this.openTabSection(e, 'tab1')}> 
                                        <h5>1. Create and distribute apps without coding</h5>
                                    </li>
                                </div>
                                
                                <div>
                                    <li className="" onClick={(e) => this.openTabSection(e, 'tab2')}> 
                                        <h5>2. Decentralised data management for all conditions of poor networks, and offline</h5>
                                    </li>
                                </div>
                                
                                <div>
                                    <li className="" onClick={(e) => this.openTabSection(e, 'tab3')}> 
                                        <h5>3. Granular data sharing and integration and data privacy</h5>
                                    </li>
                                </div>

                                <div>
                                    <li className="" onClick={(e) => this.openTabSection(e, 'tab4')}> 
                                        <h5>4. Build on best of breed open source building blocks. <br></br>No technology lockin</h5>
                                    </li>
                                </div>
                            
                            </ul>

                            <br className="mt-5"></br>

                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <ul className="red-arrow-list">
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
                                                <li>Powerful workflow engine that manages role based assignments, server side upsides and integrates with external APIs</li>
                                                <li>Built in reporting tool to create your own data dictionary and from that either publish </li>
                                                <li>Integrated dashboarding tools for analysis and visualisation</li>
                                                <li>Built in CMS and website builder to make your data public in a web site</li>
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
                                        <div className="col-lg-6">
                                            <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                        </div>
                                    </div>     
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className="red-arrow-list">
                                                <li>Able to run in the browser, on the desktop (windows and mac) or on a mobile device</li>
                                                <li>Able to work online from the cloud, or offline when networks are poor or unreliable</li>
                                                <li>Publish results to a public website or intranet with limited access</li>
                                                <li>Integrated GIS and mapping components that work offline and allows you to show your results on maps</li>
                                                <li>Social Reporter tool to publish your story or report using integrated maps, image libraries, videos and sound</li>
                                                <li>Biometric integration for verification of attendance</li>
                                                <li>Document store to upload and store documents</li>
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
                                        <div className="col-lg-6">
                                            <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                        </div>
                                    </div>     
                                </div>

                                <div id="tab3" className="tabs_item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className="red-arrow-list">
                                                <li>Cloud based solution, yet maintains separate databases for each client.</li>
                                                <li>Advanced data sharing tools enabling different organisations using the same app to share data with each or create a common repository of data</li>
                                                <li>API to integrate data from external sources or existing applications</li>
                                                <li>Ability to use the micro-data applications from the kwantu platform in your own applications</li>

                                                
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
                                        <div className="col-lg-6">
                                            <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                        </div>
                                    </div>     
                                </div>

                                <div id="tab4" className="tabs_item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className="red-arrow-list">
                                                <li>Couchdb as the core database solution.</li>
                                                <li>Node.js as the core application platform</li>
                                                <li>Javascript</li>
                                                <li>Redis as the transaction manager</li>
                                                <li>Exist-db as a scripting query engine</li>
                                                <li>MySQL as a user manager</li>
                                                <li>ElasticSearch as the reporting warehouse</li>
                                                <li>jasperReports as the reporting engine</li>
                                                <li>STRAPI and nextjs as the CMS and web builder tools</li>      
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
                                        <div className="col-lg-6">
                                            <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                        </div>
                                    </div>     
                                </div>
    
                            </div>
                        </div>
                    </div>


                </section>





                


            </div>

                
        );
    }
}

export default TabsWithText;