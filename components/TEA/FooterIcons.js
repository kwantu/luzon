import React, { Component } from 'react';
import Link from 'next/link';

class FooterIcons extends Component {
    render() {

        let { classesToAddToIcon } = this.props;

        return (
            
            <ul className="footer-social">
                <li>
                    <Link href="#">
                        <a target="_blank">
                            <i className={"flaticon-instagram " + (this.props.classesToAddToIcon)}></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a target="_blank">
                            <i className={"flaticon-facebook " + (this.props.classesToAddToIcon)}></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a target="_blank">
                            <i className={"flaticon-twitter " + (this.props.classesToAddToIcon)}></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a target="_blank">
                            <i className={"flaticon-phone-call " + (this.props.classesToAddToIcon)}></i>
                        </a>
                    </Link>
                </li>
                
            </ul>

         
                
        );
    }
}

export default FooterIcons;
