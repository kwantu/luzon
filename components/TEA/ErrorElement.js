import React, { Component } from 'react';

class ErrorElement extends Component {

    render() {
        return (
            <div className="container ptb-100">
                <img className="mt-5" src={require("../../images/infographics/error_infographic.png")} alt="error" />
            </div>
        );
    }
}

export default ErrorElement;