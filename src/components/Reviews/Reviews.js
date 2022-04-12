import React from "react";
import instImg from "../../images/review3.png";
import {} from "./Reviews.css";

const Reviews = () => {
  const reviews = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="px-12 py-8 md:px-28 md:py-16 relative review_container">
      <div className="flex flex-col w-fit mb-20">
        <h1 className="text-5xl font-myriadProRegular text-SearchBg">
          Reviews
        </h1>
        <div className="bg-SearchBg h-1 w-1/2"></div>
      </div>

      {/* <div className="flex justify-center items-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
        {reviews.map((review, index) => (
          <div
            className="m-2 w-full sm:w-80 h-80 flex items-center mt-5"
            key={index}
          >
            <div className="2xl:scale-110 hover:scale-110 2xl:hover:scale-125 flex flex-col relative items-center w-60 h-72 lg:w-80 lg:h-64 bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-500">
              <img
                src={instImg}
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white absolute z-20  lg:left-20 -top-10 lg:-top-20 shadow-xl"
              ></img>

              <div className="w-2 h-4/5 left-0 top-5 absolute bg-blue-400"></div>

              <div className="flex flex-col text-center gap-1 px-3 pt-3 text-black mt-12 absolute">
                <h4 className="rotate-180 text-6xl text-uppercase p-0 m-0 font-imprintMTShadow mb-1">
                  ''
                </h4>
                <h6 className="text-center p-0 m-0 font-greatVibesRegular font-medium text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h6>
              </div>
              <p className="absolute -bottom-3 right-1 text-black text-xs font-poppins font-light">
                Someone Else
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Reviews;
