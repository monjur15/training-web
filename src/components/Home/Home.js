import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { } from './Home.css';
import slider1 from '../../images/1.svg';
import weimg from '../../images/agency.jpg';
import { Carousel, Form, Nav } from 'react-bootstrap';

const Home = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={5000}>
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
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
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
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div className='container'>
                <div className='row we_div'>
                    <div className="col-lg-7 we_content p-5">
                        <h1>Who We Are</h1>
                        <div className='down_border mb-lg-4'></div>
                        <p>We are the fastest growing IT Training institute in Bangladesh.
                            All our classes are currently online (Live Interactive) with students
                            attending from all around the world. We are the first in Bangladesh
                            to introduce online lab facility “KloudLab”, from basic concept
                            building courses to latest bleeding edge courses are being covered by us.
                            Our faculty members are well experienced in both training and production
                            environments which makes them uniquely capable to conduct the training
                            programs in a manner where candidates become prepared for the production
                            environment.</p>

                    </div>
                    <div className="col-lg-5 we_img  mt-5">
                        <img className='img-fluid w-75' src={weimg} alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;