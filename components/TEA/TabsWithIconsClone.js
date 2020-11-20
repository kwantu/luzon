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
                                        <h2>Strategic performance and reporting</h2>
                                        <p>The Kwantu platform is an open source ‘low-code’ platform that makes it much faster and easier to create data orientated apps without needing a developer.  Apps created using this platform work offline (in a browser or via native Android, Windows or Mac apps). </p>
                                        <br className="mt-5"></br>
                                        <ul className="red-arrow-list">
                                            <li>Reporting on annual performance and development plans such as Area Development plans, annual performance plans, budget implementation plans</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                                            <li>Monitoring frameworks with indicators, result areas and performance</li>
                                            <li>Data hub to pull data from all levels, integrating social and </li>
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
                                        <img src={require("../../images/stock/IMG_5479.jpg")} alt="image" />
                                        <p></p>
                                        <img src={require("../../images/stock/IMG_5481.jpg")} alt="image" />
                                    </div>
                                </div>     
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2>Programme management </h2>
                                        <p>We have also created management information systems for large cash transfer programmes, implemented via thousands of separate projects and tracking attendance for millions of participants.</p>
                                        <br className="mt-5"></br>
                                        <ul className="red-arrow-list">
                                            <li>Reporting on national programmes</li>
                                            <li>Tracking project milestones</li>
                                            <li>Managing support to farmers and SMEs</li>
                                            <li>Managing training to communities</li>
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
                                    <img src={require("../../images/stock/IMG_5483.jpg")} alt="image" />
                                        <p></p>
                                        <img src={require("../../images/stock/IMG_5481.jpg")} alt="image" />
                                    </div>
                                </div>     
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2>Operational and citizen generated data</h2>
                                        <p>We have significant experience working with social accountability and advocacy.  Examples of work in these areas include apps for outcome harvesting, community scorecards and social audits.  These collect data as part of the implementation process and aggregate for learning, advocacy and evaluation purposes. </p>
                                        <br className="mt-5"></br>
                                        <ul className="red-arrow-list">
                                            <li>Community scorecards</li>
                                            <li>Mystery visitor</li>
                                            <li>Public expenditure tracking</li>
                                            <li>Social audits</li>
                                            <li>Public participation in planning</li>
                                            <li>Public request tracking</li>
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
                                        <img src={require("../../images/stock/IMG_5479.jpg")} alt="image" />
                                        <p></p>
                                        <img src={require("../../images/stock/IMG_5481.jpg")} alt="image" />
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