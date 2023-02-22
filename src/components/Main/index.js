import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import "./main.css"
import Img from './reading.png'
class Main extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Container>
                <div>
                    <div className='text-1 text'>What book are
                    you looking for?</div>
                    <div className='text-3'>
                        Don't know what to read next? Take a look at our catalog, we have selected the best books for you!
                    </div>
                    <button className='btn-main'> Go to catalog</button>
                    <img src={Img} alt="img" className="img" />
                </div>
                <div>
                    <h1>salam</h1>
                </div>
                </Container>
            </>
        );
    }
}

export default Main;