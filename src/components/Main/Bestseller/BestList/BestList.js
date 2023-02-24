import React, { Component } from 'react';
import Card from '../Card/Card';
class BestList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        let {allData} = this.props;
        return (
            <>
            {/* <div>{this.props.allData[0].name}</div> */}
                {allData.map(item=> <Card  key={`card-product-id-${item.id}`} { ...item } /> )}
            </>
            
        );
    }
}
export default BestList;