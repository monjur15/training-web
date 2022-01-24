import React from 'react';
import { } from './CourseDetail.css';
import docker from '../../images/docker.png';
import keyboard from '../../images/keyboard.jpg';
import { Button, Carousel } from 'react-bootstrap';

const CourseDetail = () => {
    function myFunction() {
        alert("Done!");
    }
    return (
        <div>
            <div className="container ">

                <div className="row">
                    <div className="col-lg-6 col-md-12  course_det  row">

                        <div className='course_card p-3 my-5'>

                            <div className='course_img'>
                                <img src={docker} alt="img" />
                            </div>
                            <div className='course_description p-3'>
                                <p>Docker is an open platform for developing, shipping,
                                    and running applications. Developing apps today
                                    requires so much more than writing code. Multiple
                                    languages, frameworks, architectures, and discontinuous
                                    interfaces between tools for each lifecycle stage creates
                                    enormous complexity. Docker simplifies and accelerates
                                    your workflow, while giving developers the freedom to
                                    innovate with their choice of tools, application stacks, and
                                    deployment environments for each project. This course
                                    is for everybody interested in getting started with Docker
                                    and learn a few advanced tips and tricks that will help
                                    you in real life.</p>
                            </div>

                        </div>


                    </div>




                    {/* related courses */}
                    <div className='col-lg-6 p-5 related_course_main  col-12 '>
                        <div className='related_course  row'>
                            <h3>Related Courses</h3>
                            <div className="wrapper ">
                                <div className='py-0'>
                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>

                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>
                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>

                                </div>

                                {/* 2 */}
                                <div className='py-0'>
                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>

                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>
                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>

                                </div>
                                {/* 3 */}

                                <div className='py-0'>
                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>

                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>
                                    <div className="r_courses_card  my-4 p-3 row">
                                        <div className="col-4 ">
                                            <img className='img-fluid' src={keyboard} alt="" />

                                        </div>
                                        <div className="course_title col-8 ">
                                            <h5>KUBERNETES</h5>

                                            <Button variant="light">Buy</Button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            {/*  <Carousel>
                                <Carousel.Item>
                                    <div className='py-5'>
                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>

                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>
                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>

                                    </div>
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='py-5'>
                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>

                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>
                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>

                                    </div>
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='py-5'>
                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>

                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>
                                        <div className="r_courses_card  my-4 p-3 row">
                                            <div className="col-4 ">
                                                <img className='img-fluid' src={keyboard} alt="" />

                                            </div>
                                            <div className="course_title col-8 ">
                                                <h5>KUBERNETES</h5>

                                                <Button variant="light">Buy</Button>

                                            </div>

                                        </div>

                                    </div>
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> */}

                        </div>
                    </div>

                    {/* related courses */}
                </div>
            </div>

        </div>
    );
};

export default CourseDetail;