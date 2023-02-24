import React, { Component } from "react";
import {FaRegHeart} from "react-icons/fa"
import "./card.css";
class Card extends Component {
    state = {};
    render() {
        console.log(this.props);
        let { name, img_URL, publisher, publisherYear, price, firstPrice } =
            this.props;
        return (
            <>
                <div className="col-md-3 ">
                    <div className="">
                        <img src={img_URL} className="img-all" alt="..." />
                        <div className="">
                            <div className="bName">{name}</div>
                            <p className="texts">
                                {publisher}, {publisherYear}
                            </p>
                            <span className="price">{price}</span> <del className="first-price">{firstPrice}</del>
                        </div>
                        <button className="btn cart-btn btn-primary">Add to cart</button>
                        <div className="heart"> 
                            <span className="heart-icon"> <FaRegHeart size="20px"/> </span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;
