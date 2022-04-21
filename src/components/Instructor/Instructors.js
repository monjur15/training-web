import React, { useEffect } from "react";
import instImg from "../../images/review3.png";
// import anotherImg from "../../images/sadman_amin.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchInstructors } from "../../store/action";
import "./Instructors.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay, Mousewheel } from "swiper";

const Instructors = () => {
  let dispatch = useDispatch();
  let instructors = useSelector((state) => state.instructors);
  const url = "http://3.1.196.0";

  // const array = [
  //   { id: 1, value: "Alabama" },
  //   { id: 2, value: "Georgia" },
  //   { id: 3, value: "Tennessee" },
  // ];

  useEffect(() => {
    dispatch(fetchInstructors());
  }, []);

  return (
    <div className="px-12 py-8 md:px-28 md:py-16 relative">
      <div className="flex flex-col w-fit mb-20">
        <h1 className="text-4xl sm:text-5xl font-myriadProRegular text-PopularCourses">
          Our Instructors
        </h1>
        <div className="bg-PopularCourses h-1 w-1/4"></div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"> */}
      <Swiper
        // slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={true}
        mousewheel={true}
        modules={[Autoplay, Mousewheel]}
        className="mySwiper swiperjs2"
        initialSlide={3}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
            // slidesPerGroup: 1,
            // pagination: { clickable: true },
          },
          768: {
            slidesPerView: 1,
          },
          1100: {
            slidesPerView: 2,
            // spaceBetween: 20,
            // slidesPerGroup: 2,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 50,
            // slidesPerGroup: 1,
          },
        }}
      >
        {instructors && instructors.length
          ? instructors.map((instructor, index) =>
              instructor.inst_name === "Shajal Ahamed" ? null : (
                <SwiperSlide
                  key={instructor.inst_id}
                  className="swiper-slide2 relative"
                >
                  <div className="relative w-64 xss:w-76 h-80 mt-20 md:scale-110">
                    <div className="flex flex-col items-start justify-center w-64 xss:w-76 h-80 bg-HomeInstructorCard rounded-tl-4xl rounded-br-4xl shadow-md hover:shadow-xl  transition-all duration-200">
                      <div className="flex items-center justify-center w-40 h-40 rounded-full bg-white absolute z-20 left-12 xss:left-16 -top-16 shadow-xl">
                        <img
                          src={url + instructor.inst_img}
                          // src={instImg}
                          className="w-40 h-40 rounded-full"
                        ></img>
                      </div>
                      {/* <img
            src={instImg}
            className="w-40 h-40 rounded-full bg-white absolute z-20 left-16 -top-16 shadow-xl"
          ></img> */}
                      <div className="flex flex-col gap-1 px-3 pt-3 text-black mt-8 absolute items-start">
                        <div className="h-2 w-1/3 bg-gradient-to-r from-InstructorCardBorder1 via-InstructorCardBorder2 to-HomeInstructorCard"></div>
                        <h4 className="text-uppercase p-0 m-0 font-bold font-poppins mb-2">
                          {instructor.inst_name}
                        </h4>
                        <h6 className="p-0 m-0 font-poppins font-bold text-md">
                          {/* Cracking the Coding Interview with Leetcode */}
                          {/* DevOps Engineer */}
                          {instructor.inst_designation}
                        </h6>
                        <p className="font-poppins p-0 m-0 text-black mb-10">
                          {/* A fun course to start with */}
                          {/* The Clinician, Auckland, New Zealand */}
                          {instructor.inst_quote}
                        </p>
                        <p className="font-poppins p-0 m-0 text-black text-sm absolute -bottom-12">
                          {/* Recent Course */}
                          {/* Cracking the Coding Interview with Leetcode */}
                          {/* DevOps & AWS */}
                          {instructor.inst_description}
                        </p>
                      </div>
                      <div className="h-6 w-1/2 bg-HomeInstructorBottomBorder rounded-br-4xl bottom-0 absolute"></div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )
          : null}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Instructors;
