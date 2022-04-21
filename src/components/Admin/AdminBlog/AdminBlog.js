import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {} from "./AdminBlog.css";
import { createBlog } from "../../../store/action";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const AdminBlog = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  function onCreateBlog() {
    const blog = new FormData();
    blog.append("blog_title", title);
    blog.append("blog", body);
    blog.append("blog_author", author);
    blog.append("blog_img", image);
    blog.append("publish_date", time);

    dispatch(createBlog(blog));
    swal({
      text: "Blog Added!",
      type: "success",
      timer: 2000,
    });

    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  return (
    <div>
      <div className="container py-5">
        <h1 className="py-5">Admin Blog</h1>
        <form action="">
          <label htmlFor="title" className="mr-2">
            Blog Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>

          <div className="w-90">
            <textarea
              className="border-2 border-blue-200 focus:outline-none w-800 h-400 p-4 my-4"
              placeholder="Description"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </div>
          <label htmlFor="author" className="mr-2">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>
          <br />
          <br />

          <label htmlFor="image" className="mr-2">
            Select image:
          </label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <br />
          <br />

          <label htmlFor="time" className="mr-2">
            Publish Time:
          </label>
          <input
            type="date"
            id="time"
            name="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          ></input>
          <div className="admin_btn mt-3">
            <Button onClick={() => onCreateBlog()} variant="primary">
              Post
            </Button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminBlog;
