import React, { Component } from 'react';
import './getFree.css';
import Img1 from './img/Rectangle-25.png'
import Img2 from './img/Rectangle-26.png'
class GetFree extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="get-free">
                    <div>
                        <p className="text-1">Buy 1 get 1 free</p>
                        <p className="text-2">Newest release</p>
                        <button className="btn btn-primary btn-buy bg-white">Buy now</button>
                    </div>
                    
                    <div className="img-1 imgs">
                        <img src={Img1} alt="..." />
                    </div>
                    <div className="img-2 imgs">
                        <img src={Img2} alt="..." />
                    </div>
                </div>
            </>
        );
    }
}
export default GetFree;