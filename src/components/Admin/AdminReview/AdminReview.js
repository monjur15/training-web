import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {} from "./AdminReview.css";

const AdminReview = () => {
  function myFunction() {
    alert("Done!");
  }
  const [reviewer, setReviewer] = useState("");
  let getReviewer = (eventReviewer) => {
    const reviewer = eventReviewer.target.value;
    setReviewer(reviewer);
    console.log(reviewer);
  };
  const [revieDesig, setRevieDesig] = useState("");
  let getRevieDesig = (eventReviewDesig) => {
    const revieDesig = eventReviewDesig.target.value;
    setRevieDesig(revieDesig);
    console.log(revieDesig);
  };
  const [revieDescrip, setRevieDescrip] = useState("");
  let getRevieDescrip = (eventReviewDescrip) => {
    const revieDescrip = eventReviewDescrip.target.value;
    setRevieDescrip(revieDescrip);
    console.log(revieDescrip);
  };
  const [reviewImg, setReviewImg] = useState("");
  let getReviewImg = (eventReviewImg) => {
    const reviewImg = eventReviewImg.target.value;
    setReviewImg(reviewImg);
    console.log(reviewImg);
  };
  return (
    <div>
      <div className="container py-5">
        <h1 className="my-5">Review</h1>
        <form action="">
          <label for="fname">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={getReviewer}
          ></input>
          <br />
          <br />
          <label for="fname">Designation:</label>
          <input
            type="text"
            id="desig"
            name="desig"
            onChange={getRevieDesig}
          ></input>
          <div className="w-90">
            <textarea
              class="contact-form-text"
              placeholder="Description"
              onChange={getRevieDescrip}
            ></textarea>
          </div>

          <label for="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={getReviewImg}
          ></input>
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
