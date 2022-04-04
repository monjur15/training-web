import React from "react";
import instImg from "../../images/review3.png";

const Instructors = () => {
  const array = [
    { id: 1, value: "Alabama" },
    { id: 2, value: "Georgia" },
    { id: 3, value: "Tennessee" },
  ];

  return (
    <div className="px-28 py-16 relative">
      <div className="flex flex-col w-fit mb-20">
        <h1 className="text-5xl font-myriadProRegular text-PopularCourses">
          Our Instructors
        </h1>
        <div className="bg-PopularCourses h-1 w-1/4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {array.map((arr) => (
          <div className="relative w-76 h-80 mt-20 scale-110">
            <div className="flex flex-col items-start justify-center w-76 h-80 bg-HomeInstructorCard rounded-tl-4xl rounded-br-4xl shadow-md hover:shadow-xl  transition-all duration-200">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-white absolute z-20 left-16 -top-16 shadow-xl">
                <img src={instImg} className="w-40 h-40"></img>
              </div>
              {/* <img
                src={instImg}
                className="w-40 h-40 rounded-full bg-white absolute z-20 left-16 -top-16 shadow-xl"
              ></img> */}
              <div className="flex flex-col gap-1 px-3 pt-3 text-black mt-8 absolute">
                <div className="h-2 w-1/3 bg-gradient-to-r from-InstructorCardBorder1 via-InstructorCardBorder2 to-HomeInstructorCard"></div>
                <h4 className="text-uppercase p-0 m-0 font-bold font-poppins mb-2">
                  Shahed Mehbub
                </h4>
                <h6 className="p-0 m-0 font-poppins font-bold text-md">
                  Cracking the Coding Interview with Leetcode
                </h6>
                <p className="font-poppins p-0 m-0 text-black mb-10">
                  A fun course to start with
                </p>
                <p className="font-poppins p-0 m-0 text-black text-sm absolute -bottom-12">
                  Recent Course
                </p>
              </div>
              <div className="h-6 w-1/2 bg-HomeInstructorBottomBorder rounded-br-4xl bottom-0 absolute"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
