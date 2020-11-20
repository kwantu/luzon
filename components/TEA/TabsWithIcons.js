import React, { Component } from 'react';

class TabsWithIcons extends Component {
    
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
                    <h2>Our focus areas</h2>
                    <br className="mt-5"></br>
                    <br className="mt-5"></br>

                    <div className="tab schedule-list-tab">
                        <ul className="tabs equal-widths-parent">
                            <div>
                                <li className={ "current " + ( this.props.tabHoverStyle ) } onClick={(e) => this.openTabSection(e, 'tab1')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/government.png")} alt="image" />
                                    <span className="home-tab-text">Government</span>
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
                                    <div className="col-lg-12">
                                        <h3>Kwantu works with central and local governments to implement cost effective administrative data systems.</h3>
                                    </div>

                                    <div className="col-lg-5">
                                       <br className="mt-5"></br>

                                        <ul className="red-arrow-list">
                                            <li><a href="#">Reporting on annual performance and development plans</a></li>
                                            <li><a href="#">Reporting on national programmes</a></li>
                                            <li><a href="#">Tracking project milestones</a></li>
                                            <li><a href="#">Managing support to farmers and SMEs</a></li>
                                            <li><a href="#">Managing training to communities</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-image">
                                        <img src={require("../../images/infographics/home_infographic1.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3>Kwantu can help implement systems needed to manage large development or service delivery programmes.</h3>
                                    </div>

                                    <div className="col-lg-5">
                                       <br className="mt-5"></br>

                                        <ul className="red-arrow-list">
                                            <li><a href="#">Supporting SMEs</a></li>
                                            <li><a href="#">Decentralised programme management</a></li>
                                            <li><a href="#">Grant management</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-image">
                                            <img src={require("../../images/infographics/home_infographic2.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                            <div className="row">
                                    <div className="col-lg-12">
                                        <h3>Kwantu can help digitise data from social accountability methodologies.  This in turn helps improve how you can analyse and use this data.  Learn more about:</h3>
                                    </div>

                                    <div className="col-lg-5">
                                       <br className="mt-5"></br>

                                        <ul className="red-arrow-list">
                                            <li><a href="#">Community scorecards</a></li>
                                            <li><a href="#">Mystery visitor</a></li>
                                            <li><a href="#">Public expenditure tracking</a></li>
                                            <li><a href="#">Social audits</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-image">
                                            <img src={require("../../images/infographics/home_infographic3.png")} alt="image" />
                                        </div>
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

export default TabsWithIcons;