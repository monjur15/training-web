import React from 'react';
import { Button } from 'react-bootstrap';
import { } from './Courses.css';

const Courses = () => {
    return (
        <div>
            <div className="container">
                <h1 className='course'>Courses</h1>
                <div className='down_border mb-5'></div>
                <div className='row'>
                    <div className="col-8 bg-warning ">
                        <div className='course_cap w-100'>
                            <div className='course_number'>
                                <h1>01</h1>
                            </div>
                            <div className='course_title bg-danger'>
                                <h1>DevOps</h1>

                            </div>

                        </div>

                        <div>
                            <h5>docker & kubernetes</h5>
                        </div>
                        <div className='course_btn'>
                            <Button variant="info">Course Outline</Button>{' '}
                        </div>

                    </div>

                    <div className="col-4">

                    </div>

                </div>
            </div>

        </div >
    );
};

export default Courses;