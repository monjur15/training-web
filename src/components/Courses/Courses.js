import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { } from './Courses.css';
import devOps from '../../images/devopss.jpg';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Courses = () => {
    const rightArrow = <FontAwesomeIcon icon={faArrowCircleRight} />
    return (
        <div>
            <div className="container courses_container">
                <h1 className='course'>Courses</h1>
                <div className='down_border mb-5'></div>
                <div className='row'>
                    <div className="col-lg-7 col-md-12  ">
                        <div className='course_cap w-100'>
                            <div className='course_number'>
                                <h1>01</h1>
                            </div>
                            <div className='course_title'>
                                <h1>DevOps</h1>

                            </div>


                        </div>
                        <div className='sub_title'>
                            <h5>docker & kubernetes</h5>
                        </div>


                        <div className='course_btn my-3 '>
                            <Button variant="info">Course Outline</Button>{''}

                        </div>
                        <div className=' my-3 know'>
                            <Button onClick={"/coursesDetail"} variant="info">Know more {rightArrow}</Button>{''}
                            <button onclick="activateLasers()">
                                Activate Lasers
                            </button>
                            {/* onClick={() => navigate("")} */}
                            {/* <Link to="/coursesDetail">Know more</Link> */}
                        </div>


                    </div>

                    <div className="col-lg-5 col-md-12  p-2">
                        <div className="row">
                            <div className='course_img '>

                                <img className='img-fluid' src={devOps} alt="no" />

                            </div>
                        </div>


                    </div>

                </div>
            </div>



        </div >
    );
};

export default Courses;