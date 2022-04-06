import React, { useEffect } from "react";
import instImg from "../../images/review3.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchInstructors } from "../../store/action";

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
    <div className="px-28 py-16 relative">
      <div className="flex flex-col w-fit mb-20">
        <h1 className="text-5xl font-myriadProRegular text-PopularCourses">
          Our Instructors
        </h1>
        <div className="bg-PopularCourses h-1 w-1/4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {instructors && instructors.length
          ? instructors.slice(0, 3).map((instructor, index) => (
              <div className="relative w-76 h-80 mt-20 scale-110" key={index}>
                <div className="flex flex-col items-start justify-center w-76 h-80 bg-HomeInstructorCard rounded-tl-4xl rounded-br-4xl shadow-md hover:shadow-xl  transition-all duration-200">
                  <div className="flex items-center justify-center w-40 h-40 rounded-full bg-white absolute z-20 left-16 -top-16 shadow-xl">
                    <img
                      // src={url + instructor.inst_img}
                      src={instImg}
                      className="w-40 h-40"
                    ></img>
                  </div>
                  {/* <img
                src={instImg}
                className="w-40 h-40 rounded-full bg-white absolute z-20 left-16 -top-16 shadow-xl"
              ></img> */}
                  <div className="flex flex-col gap-1 px-3 pt-3 text-black mt-8 absolute">
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
            ))
          : null}
      </div>
    </div>
  );
};

export default Instructors;
