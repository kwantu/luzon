import React, { Component } from 'react';

class DigitalExperience extends Component {
    
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
        return (
            <section className="tab-section">
                <div className="container">
                    <h2>Our focus areas</h2>

                    <div className="tab schedule-list-tab">
                        <ul className="tabs equal-widths-parent">
                            <div>
                                <li className="current" onClick={(e) => this.openTabSection(e, 'tab1')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/government.png")} alt="image" />
                                    <span className="home-tab-text">Government</span>
                                </li>
                            </div>
                            
                            <div>
                                <li className="" onClick={(e) => this.openTabSection(e, 'tab2')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/programme_management.png")} alt="image" />
                                    <span className="home-tab-text">Programme<br></br>management</span>
                                </li>
                            </div>
                            
                            <div>
                                <li className="" onClick={(e) => this.openTabSection(e, 'tab3')}> 
                                    <img className="home-tab-icon" src={require("../../images/icons/generated_data.png")} alt="image" />
                                    <span className="home-tab-text">Citizen<br></br>generated data</span>
                                </li>
                            </div>

                            
                           
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Real-Time Analytics</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Pay-Per-Click</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Online Marketing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/tab.png")} alt="image" />
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

export default DigitalExperience;