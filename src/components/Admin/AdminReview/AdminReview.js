import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {} from "./AdminReview.css";

const AdminReview = () => {
  function myFunction() {
    alert("Done!");
  }
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div>
      <div className="container py-5">
        <h1 className="my-5">Review</h1>
        <form action="">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <br />
          <br />
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
          ></input>
          <div className="w-90">
            <textarea
              className="contact-form-text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <label htmlFor="image">Select image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

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

export default AdminReview;
