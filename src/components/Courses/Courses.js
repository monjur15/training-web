import React, { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
// import { connect } from "react-redux";
// import Axios from "axios";
import { fetchCourses } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import {} from "./Courses.css";
import devOps from "../../images/devopss.jpg";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Courses = () => {
  const rightArrow = <FontAwesomeIcon icon={faArrowCircleRight} />;
  const url = "http://3.1.196.0/backend";

  const [courses1, setCourses] = useState(0);

  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div className="container review_container">
      <h1 className="category_head pt-lg-5">Courses</h1>
      <div className="down_border mb-5"></div>
      <Carousel fade>
        {courses && courses.length
          ? courses.map((course, index) => (
              <Carousel.Item key={course.course_id}>
                <div className="container courses_container">
                  <div className="row">
                    <div className="col-lg-7 col-12  ">
                      {/* courses.map(function(course) {
              
            }) */}
                      <div className="course_cap w-100">
                        <div className="course_number">
                          <h1>{index + 1}</h1>
                        </div>
                        <div className="course_title">
                          <h1>{course.course_title}</h1>
                        </div>
                      </div>
                      <div className="sub_title">
                        <h5>{course.course_desc}</h5>
                      </div>

                      <div className="course_btn my-3 ">
                        <Button variant="info">Course Outline</Button>
                        {""}
                      </div>
                      <div className=" my-3 know">
                        {/* <Button onClick={"/coursesDetail"} variant="info">Know more {rightArrow}</Button>{''} */}
                        {/* <button onclick="activateLasers()">
                                Activate Lasers
                            </button> */}
                        {/* onClick={() => navigate("")} */}
                        <Link className="ms-5" to="/coursesDetail">
                          Know more
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-5 col-12  p-2">
                      <div className="row">
                        <div className="course_img ">
                          <img
                            className="img-fluid"
                            src={url + course.course_img}
                            alt="no"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))
          : null}
      </Carousel>
    </div>
  );
};

export default Courses;
