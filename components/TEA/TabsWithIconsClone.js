import React, { Component } from 'react';
import Link from 'next/link';

// Hassan
// this is an exact clone of /components/TEA/TabsWithIcons.js
// but I removed the top heading
// and in the page that contains this component 'focus-areas.js', I sent the 'dark' prop
// so you can delete this component, I just wanted to show how it works

class TabsWithIconsClone extends Component {
    
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
        evt.currentTarget.className += " current ";
    }

    render() {

        let { classesToAddToSection, tabHoverStyle = '' } = this.props;

        return (
            <section className={ "tab-section ptb-100 " + ( this.props.classesToAddToSection ) }> 
                <div className="container">

                    <div className="tab schedule-list-tab">
                        <ul className="tabs equal-widths-parent">
                            <div>
                                <li className={ "current " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab1')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/strategic_performance-reporting.png")} alt="image" />
                                    <span className="home-tab-text">Strategic performance <br></br>and reporting</span>
                                </li>
                            </div>
                            
                            <div>
                                <li className={ " " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab2')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/programme_management.png")} alt="image" />
                                    <span className="home-tab-text">Programme<br></br>management</span>
                                </li>
                            </div>
                            
                            <div>
                                <li className={ " " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab3')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/generated_data.png")} alt="image" />
                                    <span className="home-tab-text">Citizen<br></br>generated data</span>
                                </li>
                            </div>

                            
                           
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2>One Lorem ipsum dolor sit amet, consectetur</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        <br className="mt-5"></br>
                                        <ul className="red-arrow-list">
                                            <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
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

                                    <div className="col-lg-4">
                                        <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                    </div>
                                </div>     
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2>Two Lorem ipsum dolor sit amet, consectetur</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        <br className="mt-5"></br>
                                        <ul className="red-arrow-list">
                                            <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
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

                                    <div className="col-lg-4">
                                        <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                    </div>
                                </div>     
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2>Three Lorem ipsum dolor sit amet, consectetur</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        <br className="mt-5"></br>
                                        <ul className="red-arrow-list">
                                            <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
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

                                    <div className="col-lg-4">
                                        <img src={require("../../images/white-placeholder-block.png")} alt="image" />
                                    </div>
                                </div>     
                            </div>
   
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TabsWithIconsClone;