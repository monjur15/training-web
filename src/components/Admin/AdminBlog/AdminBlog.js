import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {} from "./AdminBlog.css";
import { createBlog } from "../../../store/action";
import { useDispatch } from "react-redux";

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
    alert("Done!");
  }

  return (
    <div>
      <div className="container py-5">
        <h1 className="py-5">Admin Blog</h1>
        <form action="">
          <label htmlFor="title">Blog Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>

          <div className="w-90">
            <textarea
              className="contact-form-text"
              placeholder="Description"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          ></input>
          <br />
          <br />

          <label htmlFor="image">Select image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <br />
          <br />

          <label htmlFor="time">Publish Time:</label>
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
