import React, { useEffect } from "react";
import {} from "./Blogs.css";
import blog3 from "../../images/blog 3.jpg";
import blog4 from "../../images/blog 4.jpg";
import share from "../../images/share.png";
import love from "../../images/love.png";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { fetchBlogs } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

const Blogs = () => {
  const url = "http://3.1.196.0";
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div>
      <div className="container blogs_container p-3">
        <h1 className="mt-5">Blogs</h1>
        <div className="down_border mb-5"></div>

        {blogs && blogs.length
          ? blogs.map((blog) => (
              <div className="row" key={blog.blog_id}>
                <div className="blog_img col-lg-4 ">
                  <img
                    className="img-fluid "
                    src={url + blog.blog_img}
                    alt=""
                  />
                </div>
                <div className="col-lg-7 p-3">
                  <p>{blog.blog}</p>
                  <Link to="/lern">Learn more...</Link>
                  <br />
                  <div className="blog_react mt-4">
                    <div>
                      <Link to="/love">
                        <img src={love} alt="" />
                      </Link>
                    </div>
                    <div className="mid_border mx-3"></div>
                    <div>
                      <Link to="/love">
                        <img src={share} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="gray_border container my-3"></div>
              </div>
            ))
          : null}
      </div>

      {/* <div className="gray_border container my-3"></div> */}

      {/* <div className="container blogs_container p-3 mt-5">
        <div className="row">
          <div className="col-lg-7 p-3">
            <p>
              একজন Software Engineer এর জন্য "Capacity Estimation and
              Constraints" জানা কেন প্রয়োজন এবং এই বিষয়গুলো System Design এর
              ক্ষেত্রে কিভাবে কাজ করে এটি গুরুত্বপূর্ণ আলোচ্য বিষয়। System
              Design এর ক্ষেত্রে Capacity Estimation and Planning অবশ্যম্ভাবী
              বিষয়। যে কোন System Design এর feasibility এবং System টিকে আরো
              ভালোভাবে design করতে Capacity Estimation সাহায্য করে! Capacity
              Estimation System design এর ক্ষেত্রে একটি function হিসেবে কাজ করে,
              যেটি থাকার ফলে এবং এই parameter এর considerable change আনা হলে
              System এর Relative scale এর আমূল পরিবর্তন হয় এবং এটি System Design
              এর ক্ষেত্রে ব্যাপকভাবে সহায়তা করে।
            </p>
            <Link to="/lern">Lern more...</Link>
            <br />
            <div className="blog_react mt-4">
              <div>
                <Link to="/love">
                  <img src={love} alt="" />
                </Link>
              </div>
              <div className="mid_border mx-3"></div>
              <div>
                <Link to="/love">
                  <img src={share} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="blog_img col-lg-4 ">
            <img className="img-fluid " src={blog4} alt="" />
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="blogs_btn py-4">
          <button className="blue_btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// root    /home/ubuntu/training_web/build;
//         index   index.html index.htm;
//         location / {
//         root /home/ubuntu/training_web/build;
//         try_files $uri /index.html;
//       }
