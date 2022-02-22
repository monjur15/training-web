import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {} from "./Home.css";
import slider1 from "../../images/1.svg";
import weimg from "../../images/agency.jpg";
import csharp from "../../images/csharp.jpg";
import network from "../../images/network-engineering.jpg";
import docker from "../../images/docker.jpg";
import android from "../../images/android.jpg";
import laptop from "../../images/lapjpg.jpg";
import t1img from "../../images/t1.jpg";
import t2img from "../../images/t2.jpg";
import t3img from "../../images/t3.png";
import review1 from "../../images/review1.jfif";
import review2 from "../../images/review3.jpg";
import review3 from "../../images/review3.webp";
import Search from "../Search";
import PopularCourses from "../Courses/PopularCourses";
import Categories from "../Categories";
import { Button, Card, Carousel, Form, Nav } from "react-bootstrap";
import {
  fetchCourses,
  fetchInstructors,
  fetchCategories,
  fetchReviews,
  fetchPhotos,
} from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const url = "http://3.1.196.0";

  const courses = useSelector((state) => state.courses);
  const instructors = useSelector((state) => state.instructors);
  const categories = useSelector((state) => state.categories);
  const reviews = useSelector((state) => state.reviews);
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchInstructors());
    dispatch(fetchCategories());
    dispatch(fetchReviews());
    dispatch(fetchPhotos());
  }, []);

  return (
    <div>
      <Search />

      {/* Who we are */}
      <div className="row  px-28 py-16">
        {/* <div className="col-lg-7  mt-5 we_content p-5"> */}
        <div className="col-lg-7  mt-5 ">
          <h1 className="text-SearchBg font-myriadProRegular text-5xl">
            Who We Are
          </h1>
          <div className="down_border mb-5"></div>
          <p className="font-myriadProRegular">
            We are the fastest growing IT Training institute in Bangladesh. All
            our classes are currently online (Live Interactive) with students
            attending from all around the world. We are the first in Bangladesh
            to introduce online lab facility “KloudLab”, from basic concept
            building courses to latest bleeding edge courses are being covered
            by us. Our faculty members are well experienced in both training and
            production environments which makes them uniquely capable to conduct
            the training programs in a manner where candidates become prepared
            for the production environment.
          </p>
          <div className="btn_info ">
            <Button variant="outline-info">Our Blogs</Button>{" "}
          </div>
        </div>
        <div className="col-lg-5 we_img  my-5">
          <img className="img-fluid w-90 p-3 mt-lg-5" src={weimg} alt="" />
        </div>
      </div>
      {/* Who we are end */}

      <PopularCourses />
      <Categories />

      {/* Category section */}

      {/* <div className="container ">
        <div className="py-lg-3 category_head">
          <h1 className="mt-5">Category</h1>
          <div className="down_border mb-3"></div>
        </div>

        <div>
          <div className=" category_div py-3 ">
            <div className="row p-lg-4">
              <div className=" category col-6  ">
                <div className="col-9 cat_img">
                  <Link to="/about">
                    <img className="img-fluid" src={laptop} alt="" />
                  </Link>
                </div>
                <div className="col-9 mt-5 cat_img">
                  <Link to="/about">
                    <img className="img-fluid" src={laptop} alt="" />
                  </Link>
                </div>
              </div>

              <div className=" category col-6 ">
                <div className="col-9 cat_img">
                  <Link to="/about">
                    <img className="img-fluid" src={laptop} alt="" />
                  </Link>
                </div>
                <div className="col-9 cat_img mt-5">
                  <Link to="/about">
                    <img className="img-fluid" src={laptop} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="down_border3 mt-5"></div>
          </div>
        </div>
      </div> */}

      {/* Our Instructor Section  */}

      <div className="container">
        <div className="mt-5 inst_h1">
          <h1>Our Instructors</h1>
        </div>
        <div className="down_border2 mb-5"></div>
        <div className="mt-5">
          <div className="row instructor_main_div py-lg-5">
            {instructors && instructors.length
              ? instructors.map((instructor) => (
                  <div
                    className="col-lg-4 col-md-12 mb-4 ins_card"
                    key={instructor.inst_id}
                  >
                    <Card className=" card_body" style={{ width: "100%" }}>
                      <div className="ins_img">
                        <Card.Img
                          variant="top"
                          src={url + instructor.inst_img}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{instructor.inst_name}</Card.Title>
                        <Card.Text>{instructor.inst_designation}</Card.Text>
                        <div className="ins_btn_cls">
                          <Button variant="primary">Go somewhere</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      {/* Reviews Sections */}

      <div className="container review_container">
        <h1 className="category_head pt-lg-5">Reviews</h1>
        <div className="down_border mb-5"></div>

        <Carousel fade>
          {reviews && reviews.length
            ? reviews.map((review) => (
                <Carousel.Item key={review.id}>
                  <div className="row review_main  py-5">
                    <div className=" review_div  py-5">
                      <Card className="card_review" style={{ width: "18rem" }}>
                        <div className="review_img">
                          <Card.Img
                            variant="top"
                            src={url + review.reviewer_img}
                          />
                        </div>
                        <Card.Body className="">
                          <Card.Title>{review.reviewer_name}</Card.Title>
                          <Card.Text>{review.review}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Carousel.Item>
              ))
            : null}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
