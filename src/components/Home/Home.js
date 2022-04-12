import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {} from "./Home.css";
// import slider1 from "../../images/1.svg";
import weimg from "../../images/agency.jpg";
// import csharp from "../../images/csharp.jpg";
// import network from "../../images/network-engineering.jpg";
// import docker from "../../images/docker.jpg";
// import android from "../../images/android.jpg";
// import laptop from "../../images/lapjpg.jpg";
// import t1img from "../../images/t1.jpg";
// import t2img from "../../images/t2.jpg";
// import t3img from "../../images/t3.png";
// import review1 from "../../images/review1.jfif";
// import review2 from "../../images/review3.jpg";
// import review3 from "../../images/review3.webp";
import Search from "../Search";
import PopularCourses from "../Courses/PopularCourses";
import Categories from "../Categories";
import Instructors from "../Instructor/Instructors";
import Reviews from "../Reviews/Reviews";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(fetchCourses());
  //   dispatch(fetchInstructors());
  //   dispatch(fetchCategories());
  //   dispatch(fetchReviews());
  //   dispatch(fetchPhotos());
  // }, []);

  function navigateToBlogs() {
    navigate("/blogs");
  }

  return (
    <div>
      <Search />

      {/* Who we are */}
      <div className="row px-12 md:px-28 py-6 md:py-16">
        {/* <div className="col-lg-7  mt-5 we_content p-5"> */}
        <div className="col-lg-7  mt-5 ">
          <div className="flex  flex-col justify-center items-center lg:justify-start lg:items-start">
            <h1 className="text-SearchBg font-myriadProRegular text-5xl">
              Who We Are
            </h1>
            <div className="down_border w-2/3 sm:w-1/3 lg:w-1/6 mb-5"></div>
          </div>
          <p className="font-myriadProRegular text-lg">
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
            <Button onClick={() => navigateToBlogs()} variant="outline-info">
              Our Blogs
            </Button>{" "}
          </div>
        </div>
        <div className="col-lg-5 we_img  my-5">
          <img className="img-fluid w-90 p-3 mt-lg-5" src={weimg} alt="" />
        </div>
      </div>
      {/* Who we are end */}

      <PopularCourses />
      <Categories />
      <Instructors />
      <Reviews />

      {/* Reviews Sections */}

      {/* <div className="container review_container">
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
      </div> */}
    </div>
  );
};

export default Home;
