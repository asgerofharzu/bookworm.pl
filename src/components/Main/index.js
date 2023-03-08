import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import "./main.css";
import Img from './img/boy-n-girl.png';
import { AiOutlineArrowRight } from "react-icons/ai";
import Trending from './Trending'
import Bestseller from './Bestseller'
import GetFree from './GetFree/GetFree';
class Main extends Component {
    state = {}
    render() {
        return (
            <>
                <Container className="main-1">
                    <div>
                        <div className='text-1 text'>What book are
                            you looking for?</div>
                        <div className='text-3'>
                            Don't know what to read next? Take a look at our catalog, we have selected the best books for you!
                        </div>
                        <button className='btn-main'> Go to catalog</button>
                        <img src={Img} alt="img" className="img" />
                    </div>
                </Container>

                <Container className="main-2">
                    <div className='trend'>Trending <span className='arrow'> <AiOutlineArrowRight /> </span> </div>
                    <div className='card-main'>
                        <Trending />
                    </div>
                </Container>

                <Container className="main-3">
                    <div className='bestseller'>
                        Bestseller <span className='arrow'> <AiOutlineArrowRight /> </span>
                    </div>
                    <div className='card-main'>
                        <Bestseller />
                    </div>
                </Container>

                <Container className="main-4">
                    <GetFree />
                </Container> 

                <Container className="main-5">
                    <div className='for-readers'>
                    Our readers' choice <span className='arrow'> <AiOutlineArrowRight /> </span>
                    </div>
                </Container>

            </>
        );
    }
}

export default Main;