import React, { useEffect, useState } from "react";
import {} from "./Blogs.css";
import blog3 from "../../images/blog 3.jpg";
import blog4 from "../../images/blog 4.jpg";
import share from "../../images/share.png";
import love from "../../images/love.png";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { fetchBlogs } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
// import blog61 from "../../images/blog61.png";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const url = "http://3.1.196.0";
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  // const blogsArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  function navigateToBlogDetails(blogId) {
    navigate("/blogDetails", { state: { blogId: blogId } });
  }

  return (
    <div>
      <div className="flex flex-col w-fit px-16 2xl:px-28 pt-5 pb-3">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-myriadProRegular text-CourseHeader my-0">
          Blogs
        </h1>
        <div className="bg-SearchBg h-1 w-3/5"></div>
      </div>
      <div className="w-full blogs_bg">
        <div className="px-16 2xl:px-28 py-12 md:py-20">
          {/* {blogsArr.map((blog, index) => */}
          {screenSize.dynamicWidth > 640
            ? blogs && blogs.length
              ? blogs.map((blog, index) =>
                  index % 2 == 0 ? (
                    <div
                      className="flex flex-col gap-16 mb-20"
                      key={blog.blog_id}
                    >
                      <div className="flex sm:grid sm:grid-cols-3">
                        <div className="col-span-1">
                          <img
                            src={url + blog.blog_img}
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 cursor-pointer"
                            onClick={() => navigateToBlogDetails(blog.blog_id)}
                          ></img>
                        </div>
                        <div className="col-span-2 mt-3 ml-10 sm:ml-0">
                          {/* <p className="font-poppins w-5/6 mb-0">
                        একজন Software Engineer এর জন্য "Capacity Estimation
                        and Constraints" জানা কেন প্রয়োজন এবং এই বিষয়গুলো
                        System Design এর ক্ষেত্রে কিভাবে কাজ করে এটি
                        গুরুত্বপূর্ণ আলোচ্য বিষয়। System Design এর ক্ষেত্রে
                        Capacity Estimation and Planning অবশ্যম্ভাবী বিষয়। যে
                        কোন System Design এর feasibility এবং System টিকে আরো
                        ভালোভাবে design করতে Capacity Estimation সাহায্য করে!
                        Capacity Estimation System design এর ক্ষেত্রে একটি
                        function হিসেবে কাজ করে, যেটি থাকার ফলে এবং এই
                        parameter এর considerable change আনা হলে System এর
                        Relative scale এর আমূল পরিবর্তন হয় এবং এটি System
                        Design এর ক্ষেত্রে ব্যাপকভাবে সহায়তা করে।
                      </p> */}
                          {/* <article></article> */}
                          <article className="font-poppins w-5/6 mb-0 text-xs xs:text-sm sm:text-md">
                            {screenSize.dynamicWidth > 1536
                              ? blog.blog.substring(0, 700)
                              : screenSize.dynamicWidth > 1280
                              ? blog.blog.substring(0, 400)
                              : screenSize.dynamicWidth > 1024
                              ? blog.blog.substring(0, 200)
                              : screenSize.dynamicWidth > 768
                              ? blog.blog.substring(0, 100)
                              : blog.blog.substring(0, 50)}
                          </article>
                          <p
                            onClick={() => navigateToBlogDetails(blog.blog_id)}
                            className="font-poppins text-gray-500 hover:text-gray-600 cursor-pointer mb-3 text-xs xs:text-sm sm:text-md"
                          >
                            See more...
                          </p>
                          <div className="flex w-fit gap-3">
                            <BsFillHeartFill className="text-BlogIconsColour w-4 h-4 sm:w-7 sm:h-7 hover:text-BlogIconsColour1 transition-all duration-200" />
                            <div className="w-0.5 h-5 sm:h-7 bg-gray-300"></div>
                            <FaShareSquare className="text-BlogIconsColour w-4 h-4 sm:w-7 sm:h-7 hover:text-BlogIconsColour1 transition-all duration-200" />
                          </div>
                        </div>
                      </div>
                      <div className="h-0.5 w-full bg-gray-300 "></div>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col gap-16 mb-20"
                      key={blog.blog_id}
                    >
                      <div className="flex sm:grid sm:grid-cols-3">
                        <div className="col-span-2 mt-3">
                          <article className="font-poppins w-5/6 mb-0 text-xs xs:text-sm sm:text-md">
                            {screenSize.dynamicWidth > 1536
                              ? blog.blog.substring(0, 700)
                              : screenSize.dynamicWidth > 1280
                              ? blog.blog.substring(0, 400)
                              : screenSize.dynamicWidth > 1024
                              ? blog.blog.substring(0, 200)
                              : screenSize.dynamicWidth > 768
                              ? blog.blog.substring(0, 100)
                              : blog.blog.substring(0, 50)}
                          </article>
                          <p
                            onClick={() => navigateToBlogDetails(blog.blog_id)}
                            className="cursor-pointer font-poppins text-gray-500 hover:text-gray-600 hover:cursor-pointer mb-3 text-xs xs:text-sm sm:text-md"
                          >
                            See more...
                          </p>
                          <div className="flex w-fit gap-3">
                            <BsFillHeartFill className="text-BlogIconsColour w-4 h-4 sm:w-7 sm:h-7 hover:text-BlogIconsColour1 transition-all duration-200" />
                            <div className="w-0.5 h-5 sm:h-7 bg-gray-300"></div>
                            <FaShareSquare className="text-BlogIconsColour w-4 h-4 sm:w-7 sm:h-7 hover:text-BlogIconsColour1 transition-all duration-200" />
                          </div>
                        </div>
                        <div className="col-span-1">
                          <img
                            src={url + blog.blog_img}
                            className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 cursor-pointer"
                            onClick={() => navigateToBlogDetails(blog.blog_id)}
                          ></img>
                        </div>
                      </div>
                      <div className="h-0.5 w-full bg-gray-300 "></div>
                    </div>
                  )
                )
              : null
            : blogs && blogs.length
            ? blogs.map((blog, index) => (
                <div className="flex flex-col gap-10 mb-10" key={blog.blog_id}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="">
                      <img
                        src={url + blog.blog_img}
                        className="w-32 h-32 cursor-pointer mb-3  "
                        onClick={() => navigateToBlogDetails(blog.blog_id)}
                      ></img>
                    </div>
                    <div className="">
                      <article className="font-poppins w-full mb-0 text-xs text-center">
                        {blog.blog.substring(0, 200)}
                      </article>
                      <p
                        onClick={() => navigateToBlogDetails(blog.blog_id)}
                        className="font-poppins text-gray-500 hover:text-gray-600 cursor-pointer mb-3 text-xs text-center"
                      >
                        See more...
                      </p>
                      {/* <div className="flex w-fit gap-3">
                        <BsFillHeartFill className="text-BlogIconsColour w-4 h-4 hover:text-BlogIconsColour1 transition-all duration-200" />
                        <div className="w-0.5 h-5 sm:h-7 bg-gray-300"></div>
                        <FaShareSquare className="text-BlogIconsColour w-4 h-4 hover:text-BlogIconsColour1 transition-all duration-200" />
                      </div> */}
                    </div>
                  </div>
                  <div className="h-0.5 w-full bg-gray-300 "></div>
                </div>
              ))
            : null}

          {/* <div className="flex flex-col gap-16">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <p className="font-poppins w-5/6 mb-0">
                  একজন Software Engineer এর জন্য "Capacity Estimation and
                  Constraints" জানা কেন প্রয়োজন এবং এই বিষয়গুলো System Design এর
                  ক্ষেত্রে কিভাবে কাজ করে এটি গুরুত্বপূর্ণ আলোচ্য বিষয়। System
                  Design এর ক্ষেত্রে Capacity Estimation and Planning
                  অবশ্যম্ভাবী বিষয়। যে কোন System Design এর feasibility এবং
                  System টিকে আরো ভালোভাবে design করতে Capacity Estimation
                  সাহায্য করে! Capacity Estimation System design এর ক্ষেত্রে
                  একটি function হিসেবে কাজ করে, যেটি থাকার ফলে এবং এই parameter
                  এর considerable change আনা হলে System এর Relative scale এর
                  আমূল পরিবর্তন হয় এবং এটি System Design এর ক্ষেত্রে ব্যাপকভাবে
                  সহায়তা করে।
                </p>
                <p className="font-poppins text-gray-500 hover:text-gray-600 hover:cursor-pointer mb-5">
                  See more...
                </p>
                <div className="flex w-fit gap-3">
                  <BsFillHeartFill className="text-BlogIconsColour w-7 h-7" />
                  <div className="w-0.5 h-7 bg-gray-300"></div>
                  <FaShareSquare className="text-BlogIconsColour w-7 h-7" />
                </div>
              </div>
              <div className="col-span-1">
                <img src={blog61} className="w-92 h-400"></img>
              </div>
            </div>
            <div className="h-0.5 w-full bg-gray-300 "></div>
          </div> */}
        </div>
      </div>
    </div>
    // <div>
    //   <div className="container blogs_container p-3 blogs_bg">
    //     <h1 className="mt-5">Blogs</h1>
    //     <div className="down_border mb-5"></div>

    //     {blogs && blogs.length
    //       ? blogs.map((blog) => (
    //           <div className="row" key={blog.blog_id}>
    //             <div className="blog_img col-lg-4 ">
    //               <img
    //                 className="img-fluid "
    //                 src={url + blog.blog_img}
    //                 alt=""
    //               />
    //             </div>
    //             <div className="col-lg-7 p-3">
    //               <p>{blog.blog}</p>
    //               <Link to="/lern">Learn more...</Link>
    //               <br />
    //               <div className="blog_react mt-4">
    //                 <div>
    //                   <Link to="/love">
    //                     <img src={love} alt="" />
    //                   </Link>
    //                 </div>
    //                 <div className="mid_border mx-3"></div>
    //                 <div>
    //                   <Link to="/love">
    //                     <img src={share} alt="" />
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="gray_border container my-3"></div>
    //           </div>
    //         ))
    //       : null}
    //   </div>
    //   <div className="container">
    //     <div className="blogs_btn py-4">
    //       <button className="blue_btn">Read More</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Blogs;

// root    /home/ubuntu/training_web/build;
//         index   index.html index.htm;
//         location / {
//         root /home/ubuntu/training_web/build;
//         try_files $uri /index.html;
//       }
