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
        

        let { classesToAddToSection } = this.props;

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
                            <ul className="tabs-red equal-widths-parent px-0">
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
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
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
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
                                                <li>Design forms with advanced calculations, complex tables and autoload data from other forms</li>
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
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                
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
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur, consectetur adipiscing elit, sed do, consectetur adipiscing elit, sed do</li>
                                                
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