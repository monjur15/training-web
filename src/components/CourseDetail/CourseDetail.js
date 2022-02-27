import React from "react";
import {} from "./CourseDetail.css";
import docker from "../../images/docker.png";
import keyboard from "../../images/keyboard.jpg";
import { Button, Carousel } from "react-bootstrap";

const CourseDetail = () => {
  function myFunction() {
    alert("Done!");
  }

  const relatedCourses = [
    { id: 1, title: "kubernetes" },
    { id: 2, title: "python" },
    { id: 3, title: "linux" },
    { id: 4, title: "Design Patterns with JS" },
    { id: 5, title: "AWS" },
    { id: 5, title: "Cracking the coding interview with leetcode" },
  ];

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-12  course_det  row">
            <div className="course_card p-3 my-5 flex flex-col items-center">
              <div className="course_img">
                <img src={docker} alt="img" className="w-64 h-48" />
              </div>
              <div className="course_description pt-3 px-3 font-pangramRegular">
                <p>
                  Docker is an open platform for developing, shipping, and
                  running applications. Developing apps today requires so much
                  more than writing code. Multiple languages, frameworks,
                  architectures, and discontinuous interfaces between tools for
                  each lifecycle stage creates enormous complexity. Docker
                  simplifies and accelerates your workflow, while giving
                  developers the freedom to innovate with their choice of tools,
                  application stacks, and deployment environments for each
                  project. This course is for everybody interested in getting
                  started with Docker and learn a few advanced tips and tricks
                  that will help you in real life.
                </p>
              </div>
              <button className="text-center  bg-white text-blue-300 px-10 py-2 rounded-full font-pangramRegular shadow-md hover:shadow-lg font-semibold  transition-all duration-200">
                Buy
              </button>
            </div>
          </div>

          {/* related courses */}
          <div className="col-lg-6 p-5 related_course_main  col-12 ">
            <div className="related_course  row">
              <div className="flex justify-center">
                <h3>Related Courses</h3>
              </div>
              <div className="wrapper ">
                {/* <div className="py-0"> */}
                {relatedCourses.map((course) => (
                  <div
                    className="p-3 my-4 bg-blue-300 rounded-2xl r_courses_card"
                    key={course.id}
                  >
                    <div className="flex gap-5">
                      <img
                        className="w-28 h-28 ml-5 rounded-full shadow-lg"
                        src={keyboard}
                      ></img>
                      <div>
                        <h3 className="py-2 font-myriadProRegular text- font-bold text-uppercase text-white m-0">
                          {course.title}
                        </h3>
                        <button className="bg-white text-blue-300 font-pangramRegular px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                  // <div className="r_courses_card  my-4 p-3 row" key={course.id}>
                  //   <div className="col-4 ">
                  //     <img className="img-fluid" src={keyboard} alt="" />
                  //   </div>
                  //   <div className="course_title col-8 ">
                  //     <h5>KUBERNETES</h5>

                  //     <Button variant="light">Buy</Button>
                  //   </div>
                  // </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
