import React, { Component } from "react";
import logoPng from "./logo.png"
class Logo extends Component {

    render() {
        return (
            <>
                <img src={logoPng} alt="" />
            </>
        );
    }
}

export default Logo;