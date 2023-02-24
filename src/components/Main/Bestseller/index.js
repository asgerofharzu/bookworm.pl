import React, { Component } from 'react';
import BestList from './BestList/BestList';
import {getBook_API} from './api/bestSellerAPI.js';
class Bestseller extends Component {
    state = {  } 
    render() { 
        let data = getBook_API();
        return (
            <>
                <BestList  allData={data}/>
            </>
        );
    }
}

export default Bestseller;