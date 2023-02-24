import React, { Component } from 'react';
import BoxList from './BoxList/BoxList';
import {getBook_API} from './api/getApiBook.js';
class Trending extends Component {
    state = {  } 
    render() { 
        let data = getBook_API();
        return (
            <>
                <BoxList  allData={data}/>
            </>
        );
    }
}

export default Trending;