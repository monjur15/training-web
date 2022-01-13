import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { } from './Home.css';
import slider1 from '../../images/1.svg';
import weimg from '../../images/agency.jpg';
import csharp from '../../images/csharp.jpg';
import network from '../../images/network-engineering.jpg';
import docker from '../../images/docker.jpg';
import android from '../../images/android.jpg';
import laptop from '../../images/lapjpg.jpg';
import t1img from '../../images/t1.jpg';
import t2img from '../../images/t2.jpg';
import t3img from '../../images/t3.png';
import review1 from '../../images/review1.jfif';
import review2 from '../../images/review3.jpg';
import review3 from '../../images/review3.webp';
import { Button, Card, Carousel, Form, Nav } from 'react-bootstrap';

const Home = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div>

            {/* slider carasoul  */}
            <Carousel>
                <Carousel.Item interval={5000}>
                    <div className='p-5 slider_main'>

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
                    <div className='p-5 slider_main'>

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
                    <div className='p-5 slider_main'>

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


            {/* Who we are section */}

            <div className='container '>
                <div className='row we_div p-lg-5 '>
                    <div className="col-lg-7  mt-5 we_content p-5">
                        <h1>Who We Are</h1>
                        <div className='down_border mb-5'></div>
                        <p className=''>We are the fastest growing IT Training institute in Bangladesh.
                            All our classes are currently online (Live Interactive) with students
                            attending from all around the world. We are the first in Bangladesh
                            to introduce online lab facility “KloudLab”, from basic concept
                            building courses to latest bleeding edge courses are being covered by us.
                            Our faculty members are well experienced in both training and production
                            environments which makes them uniquely capable to conduct the training
                            programs in a manner where candidates become prepared for the production
                            environment.</p>
                        <div className='btn_info '><Button variant="outline-info">Our Blogs</Button>{' '}</div>


                    </div>
                    <div className="col-lg-5 we_img  my-5">
                        <img className='img-fluid w-90 p-3 mt-lg-5' src={weimg} alt="" />
                    </div>
                </div>


            </div>

            {/* Popular cources */}

            <Carousel fade>
                <Carousel.Item>

                    <div className='container man_popular_div'>
                        <div className='down_border3 mb-lg-4'></div>
                        <h1 className='mt-5 mb-3'>Popular Cources</h1>
                        <div className='down_border2 mb-4'></div>


                        <div className='row popular_cources'>
                            <div className='col-6'>
                                <img className='img-fluid' src={csharp} alt="" />

                            </div>
                            <div className='col-6'>
                                <img className='img-fluid' src={network} alt="" />

                            </div>


                        </div>

                    </div>
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container man_popular_div'>
                        <div className='down_border3 mb-lg-4'></div>
                        <h1 className='mt-5 mb-3'>Popular Cources</h1>
                        <div className='down_border2 mb-4'></div>


                        <div className='row popular_cources'>
                            <div className='col-6'>
                                <img className='img-fluid' src={csharp} alt="" />

                            </div>
                            <div className='col-6'>
                                <img className='img-fluid' src={network} alt="" />

                            </div>


                        </div>

                    </div>
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container man_popular_div'>
                        <div className='down_border3 mb-lg-4'></div>
                        <h1 className='mt-5 mb-3'>Popular Cources</h1>
                        <div className='down_border2 mb-4'></div>


                        <div className='row popular_cources'>
                            <div className='col-6 '>
                                <img className='img-fluid' src={csharp} alt="" />

                            </div>
                            <div className='col-6'>
                                <img className='img-fluid' src={network} alt="" />

                            </div>


                        </div>

                    </div>
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/*         <div className='container man_popular_div'>
                <h1>Popular Cources</h1>
                <div className='down_border2 mb-lg-4'></div>


                <div className='row popular_cources'>
                    <div className='col-3'>
                        <img className='img-fluid' src={csharp} alt="" />

                    </div>
                    <div className='col-3'>
                        <img className='img-fluid' src={network} alt="" />

                    </div>
                    <div className='col-3'>
                        <img className='img-fluid' src={docker} alt="" />

                    </div>
                    <div className='col-3'>
                        <img className='img-fluid' src={android} alt="" />

                    </div>

                </div>

        </div> */}



            {/* Category section */}

            <div className='container '>
                <div className="py-lg-3 category_head">
                    <h1 className='mt-5'>Category</h1>
                    <div className='down_border mb-2'></div>
                </div>

                <div>
                    <div className=" category_div p-3">
                        <div className="row p-lg-4">
                            <div className=" category col-6 ">
                                <div className="col-9 ">
                                    <img className='img-fluid' src={laptop} alt="" />
                                </div>
                                <div className="col-9 mt-5 ">
                                    <img className='img-fluid' src={laptop} alt="" />
                                </div>
                            </div>

                            <div className=" category col-6 ">
                                <div className="col-9 mt-5">
                                    <img className='img-fluid' src={laptop} alt="" />
                                </div>
                                <div className="col-9 mt-5">
                                    <img className='img-fluid' src={laptop} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='down_border3 mt-1'></div>
                    </div>

                </div>

            </div>







            {/* Our Instructor Section  */}

            <div className='container'>
                <div className='mt-5 inst_h1'>
                    <h1 >Our Istructor</h1>
                </div>
                <div className='down_border2 mb-5'></div>
                <div className='mt-5'>
                    <div className="row instructor_main_div py-lg-5">
                        <div className="col-lg-4 col-md-12 mb-4 ins_card">
                            <Card className=' card_body' style={{ width: '100%' }}>
                                <div className='ins_img'><Card.Img variant="top" src={t1img} /></div>
                                <Card.Body>
                                    <Card.Title>Instructor Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="ins_btn_cls"><Button variant="primary">Go somewhere</Button></div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-lg-4 col-md-12 mb-4 ins_card">
                            <Card className=' card_body' style={{ width: '100%' }}>
                                <div className='ins_img'><Card.Img variant="top" src={t2img} /></div>
                                <Card.Body className=''>
                                    <Card.Title>Instructor Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="ins_btn_cls"><Button variant="primary">Go somewhere</Button></div>
                                </Card.Body>
                            </Card>

                        </div>

                        <div className="col-lg-4 col-md-12 mb-4 ins_card">
                            <Card className=' card_body' style={{ width: '100%' }}>
                                <div className='ins_img'> <Card.Img variant="top" src={t3img} /></div>
                                <Card.Body>
                                    <Card.Title>Instructor Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="ins_btn_cls"><Button variant="primary">Go somewhere</Button></div>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>

                </div>

            </div>



            {/* Reviews Sections */}

            <div className='container review_container'>
                <h1 className='category_head pt-lg-5'>Reviews</h1>
                <div className="down_border mb-5"></div>

                <Carousel fade>
                    <Carousel.Item className=''>
                        <div className="row review_main  py-5">
                            <div className=' review_div  py-5'>
                                <Card className='card_review' style={{ width: '18rem' }}>
                                    <div className='review_img'><Card.Img variant="top" src={review1} /></div>
                                    <Card.Body className=''>
                                        <Card.Title>Reviewer Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row review_main  py-5">
                            <div className=' review_div  py-5'>
                                <Card className='card_review' style={{ width: '18rem' }}>
                                    <div className='review_img'><Card.Img variant="top" src={review3} /></div>
                                    <Card.Body className=''>
                                        <Card.Title>Reviewer Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                        </div>

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row review_main  py-5">
                            <div className=' review_div  py-5'>
                                <Card className='card_review' style={{ width: '18rem' }}>
                                    <div className='review_img'><Card.Img variant="top" src={review2} /></div>
                                    <Card.Body className=''>
                                        <Card.Title>Reviewer Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                        </div>

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



            </div>












        </div >
    );
};

export default Home;