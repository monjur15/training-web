import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { } from './Home.css';
import slider1 from '../../images/1.svg';
import { Carousel, Form, Nav } from 'react-bootstrap';

const Home = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div>
            {/*  <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <div className='banner_slider1'>
                        <img
                            className="d-block w-100"
                            src="../../images/1.svg"
                            alt="First slide"
                        />
                        <h1>Hello 1</h1>


                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />
                    <h1>Hello 2</h1>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                    <h1>Hello 3</h1>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

            <div className='container slider_main'>

                <div className='row slider1_div '>
                    <div className='col-lg-6 col-sm-12 slider1_img p-4'>
                        <img className='img-fluid' src={slider1} alt="" />

                    </div>
                    <div className='col-lg-6 col-sm-12 slider1_content   mt-lg-4 p-4'>
                        <h3>Are You Ready To</h3>
                        <h1 className='mb-lg-5'>Lead The Way</h1>
                        <div className='input_field w-75 mb-sm-4'><input className='w-100 p-lg-2 ' type="text"></input></div>
                        <span className='search'><Nav.Link href="/search">{searchIcon}</Nav.Link></span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;