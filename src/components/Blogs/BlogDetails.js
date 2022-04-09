import React, { useEffect } from "react";
import blog61 from "../../images/blog61.png";
import {} from "./Blogs.css";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { fetchSingleBlog } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

const BlogDetails = () => {
  let url = "http://3.1.196.0";
  let location = useLocation();
  let dispatch = useDispatch();
  let singleBlog = useSelector((state) => state.singleBlog);

  useEffect(() => {
    dispatch(fetchSingleBlog(location.state.blogId));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-poppins text-5xl font-bold pt-10 text-CourseHeader">
        {/* Overview of OOP */}
        {singleBlog ? singleBlog[0].blog_title : "Author"}
      </h1>
      <h3 className="text-CourseHeader font-poppins">
        {/* Nishat Ahmed Nobel */}
        {singleBlog ? singleBlog[0].blog_author : "Title"}
      </h3>

      <div className="blog_details_bg flex items-center justify-center w-full">
        {singleBlog ? (
          <img
            src={url + "/media/" + singleBlog[0].blog_img}
            className="px-44 py-20 h-650"
          ></img>
        ) : null}
      </div>

      <div className="w-full px-28 py-5 text-HomeTutorialh1">
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. */}
        {singleBlog ? singleBlog[0].blog : "Description"}
      </div>

      <div className="flex w-fit gap-3 pb-5">
        <BsFillHeartFill className="text-BlogIconsColour w-7 h-7 hover:text-BlogIconsColour1 transition-all duration-200" />
        <div className="w-0.5 h-7 bg-gray-300"></div>
        <FaShareSquare className="text-BlogIconsColour w-7 h-7 hover:text-BlogIconsColour1 transition-all duration-200" />
      </div>
    </div>
  );
};

export default BlogDetails;
