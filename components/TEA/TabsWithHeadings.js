import React, { Component } from 'react';
import Link from 'next/link';

// Hassan
// this is an clone of /components/TEA/TabsWithIcons.js
// with an extra heading added above the text
// and with the class 'product-tabs' added to the tabs ul
// and icon removed
// and in the page that contains this component 'focus-areas.js', I sent the 'dark' prop
// and a h2 added to top of page 'Key Benefits'
// so some work would be required to make it dynamic, else just use as is

class TabsWithHeadings extends Component {
    
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

        let { classesToAddToSection, tabHoverStyle = '', heightClassForList } = this.props;

        return (
            <section className={ "tab-section ptb-100 " + ( this.props.classesToAddToSection ) }> 
                <div className="container">

                    <h2>Key Benefits</h2>
                    <br className="mt-5"></br>
                    <br className="mt-5"></br>

                    <div className="tab schedule-list-tab">
                        <ul className={"tabs equal-widths-parent px-0 " + ( this.props.classesToAddToTabsUL )}>
                            <div>
                                <li className={ "current " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab11')}> 
                                    <span className="product-tab-text red-dot-at-end-of-text">Sed quat dolesec aepedit unda</span>
                                    <br></br>
                                    <span className="product-tab-text-small hidden-xs">Aditatus reperfe rroreped modigendae prepre pore et pario et ipidunt etur? Nam, occus exerfer iorero.</span>
                                </li>
                            </div>
                            
                            <div>
                                <li className={ " " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab22')}> 
                                <span className="product-tab-text red-dot-at-end-of-text">Nam occus exerfer iorero ellendis.</span>
                                    <br></br>
                                    <span className="product-tab-text-small hidden-xs">Aditatus reperfe rroreped modigendae prepre pore et pario et ipidunt etur? Nam, occus exerfer iorero.</span>
                                </li>
                            </div>
                            
                            <div>
                                <li className={ " " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab33')}> 
                                <span className="product-tab-text red-dot-at-end-of-text">Ellendis Nam occus exerfer iorero</span>
                                    <br></br>
                                    <span className="product-tab-text-small hidden-xs">Aditatus reperfe rroreped modigendae prepre pore et pario et ipidunt etur? Nam, occus exerfer iorero.</span>
                                </li>
                            </div>

                            
                           
                        </ul>

                        <div className="tab_content">
                            <div id="tab11" className="tabs_item">
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

                            <div id="tab22" className="tabs_item">
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

                            <div id="tab33" className="tabs_item">
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

export default TabsWithHeadings;