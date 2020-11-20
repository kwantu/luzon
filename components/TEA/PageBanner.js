import React, { Component } from 'react';
import Link from 'next/link';

class PageBanner extends Component {
    render() {

        let { pageTitle } = this.props;
        
        return (
            <div className="page-title-area pt-100">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container ">
                            <div className="page-title-content">
                                <h2>{pageTitle}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;