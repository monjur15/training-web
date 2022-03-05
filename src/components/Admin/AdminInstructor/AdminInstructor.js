import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createInstructor } from "../../../store/action";
import { useDispatch } from "react-redux";

const AdminInstructor = () => {
  const dispatch = useDispatch();

  const [instName, setInstName] = useState("");
  const [instDesig, setInstDesig] = useState("");
  const [instDesc, setInstDesc] = useState("");
  const [instQuote, setInstQuote] = useState("");
  const [instImg, setInstImg] = useState(null);

  function onCreateInstructor() {
    const instructor = new FormData();
    instructor.append("inst_name", instName);
    instructor.append("inst_designation", instDesig);
    instructor.append("inst_description", instDesc);
    instructor.append("inst_quote", instQuote);
    instructor.append("inst_img", instImg);

    dispatch(createInstructor(instructor));
    alert("Done!");
  }

  return (
    <div>
      <div className="container py-5">
        <h1 className="my-5">Instructor</h1>
        <form action="" method="post" encType="multipart/form-data">
          <label htmlFor="fname">Name:</label>
          <input
            type="text"
            id="instName"
            name="instName"
            onChange={(e) => setInstName(e.target.value)}
            value={instName}
          ></input>
          <br />
          <br />

          <label htmlFor="fname">Designation:</label>
          <input
            type="text"
            id="instDesig"
            name="instDesig"
            onChange={(e) => setInstDesig(e.target.value)}
            value={instDesig}
          ></input>

          <br />
          <br />

          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            id="instQuote"
            name="instQuote"
            onChange={(e) => setInstQuote(e.target.value)}
            value={instQuote}
          ></input>

          <div className="w-90">
            <textarea
              className="contact-form-text shadow-none"
              placeholder="Description"
              id="instDesc"
              name="instDesc"
              onChange={(e) => setInstDesc(e.target.value)}
              value={instDesc}
            ></textarea>
          </div>

          <label htmlFor="img">Select image:</label>
          <input type="file" onChange={(e) => setInstImg(e.target.files[0])} />

          <div className="admin_btn mt-3">
            <Button onClick={() => onCreateInstructor()} variant="primary">
              Post
            </Button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminInstructor;
