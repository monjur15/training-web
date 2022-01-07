import React from 'react';
import { } from './CourseDetail.css';
import docker from '../../images/docker.png';
import keyboard from '../../images/keyboard.jpg';
import { Button } from 'react-bootstrap';

const CourseDetail = () => {
    return (
        <div>
            <div className="container ">

                <div className="row">
                    <div className="col-lg-6 col-md-12   row">

                        <div className='course_card'>

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
                    <div className='col-lg-6  col-md-12 '>
                        <div className='related_course row'>
                            <h3>Related Courses</h3>
                            <div className='p-5'>
                                <div className="r_courses_card p-3 row">
                                    <div className="col-2 ">
                                        <img className='img-fluid' src={keyboard} alt="" />

                                    </div>
                                    <div className="course_title col-9 ">
                                        <h5>KUBERNETES</h5>

                                        <Button variant="light">Buy</Button>

                                    </div>

                                </div>

                                <div className="r_courses_card p-3 mt-5   row">
                                    <div className="col-2 ">
                                        <img className='img-fluid' src={keyboard} alt="" />

                                    </div>
                                    <div className="course_title col-9 ">
                                        <h5>KUBERNETES</h5>

                                        <Button variant="light">Buy</Button>

                                    </div>

                                </div>

                                <div className="r_courses_card p-3 mt-5   row">
                                    <div className="col-2 ">
                                        <img className='img-fluid' src={keyboard} alt="" />

                                    </div>
                                    <div className="course_title col-9 ">
                                        <h5>KUBERNETES</h5>

                                        <Button variant="light">Buy</Button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetail;