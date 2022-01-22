import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {} from "./AdminBlog.css";

const AdminBlog = () => {
  // Alert messeg function
  function myFunction() {
    alert("Done!");
  }

  const [blogTitleValue, setblogTitleValue] = useState("");
  let getData = (eventTitle) => {
    const blogTitleValue = eventTitle.target.value;
    setblogTitleValue(blogTitleValue);
    console.log(blogTitleValue);
  };

  const [blogDes, setBlogDes] = useState("");
  let getDes = (eventdes) => {
    const blogDes = eventdes.target.value;
    setBlogDes(blogDes);
    console.log(blogDes);
  };
  const [author, setAuthor] = useState("");
  let getAuthor = (eventauthor) => {
    const author = eventauthor.target.value;
    setAuthor(author);
    console.log(author);
  };
  const [blogimage, setBlogimage] = useState("");
  let getBlogimg = (eventblogimg) => {
    const blogimage = eventblogimg.target.value;
    setBlogimage(blogimage);
    console.log(blogimage);
  };

  const [blogtime, setBlogtime] = useState("");
  let getBlogtime = (eventTime) => {
    const blogtime = eventTime.target.value;
    setBlogtime(blogtime);
    console.log(blogtime);
  };

  return (
    <div>
      <div className="container py-5">
        <h1 className="py-5">Admin Blog</h1>
        <form action="">
          <label for="fname">Blog Title:</label>
          {/* <input type="text" id="title" name="title" onChange={getData}></input> */}
          <input type="text" id="name" name="name" onChange={getData}></input>

          <div className="w-90">
            <textarea
              class="contact-form-text"
              placeholder="Description"
              onChange={getDes}
            ></textarea>
          </div>
          <label for="fname">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={getAuthor}
          ></input>
          <br />
          <br />

          <label for="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={getBlogimg}
          ></input>

          <br />
          <br />

          <label for="fname">Publish Time:</label>
          <input type="date" id="time" name="time" onChange={blogtime}></input>
          <div className="admin_btn mt-3">
            <Button onClick={() => myFunction()} variant="primary">
              Post
            </Button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminBlog;
