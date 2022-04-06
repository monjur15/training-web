import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createInstructor } from "../../../store/action";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

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

    swal({
      text: "Instructor Added!",
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
        <h1 className="my-5">Instructor</h1>
        <form action="" method="post" encType="multipart/form-data">
          <label htmlFor="name" className="mr-2">
            Name:
          </label>
          <input
            type="text"
            id="instName"
            name="instName"
            onChange={(e) => setInstName(e.target.value)}
            value={instName}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>
          <br />
          <br />

          <label htmlFor="designation" className="mr-2">
            Designation:
          </label>
          <input
            type="text"
            id="instDesig"
            name="instDesig"
            onChange={(e) => setInstDesig(e.target.value)}
            value={instDesig}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>

          <br />
          <br />

          <label htmlFor="quote" className="mr-2">
            Workplace:
          </label>
          <input
            type="text"
            id="instQuote"
            name="instQuote"
            onChange={(e) => setInstQuote(e.target.value)}
            value={instQuote}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>

          <br />
          <br />

          <label htmlFor="description" className="mr-2">
            Speciality:
          </label>
          <input
            type="text"
            id="instDesc"
            name="instDesc"
            onChange={(e) => setInstDesc(e.target.value)}
            value={instDesc}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>

          <br />
          <br />

          {/* <div className="w-90">
            <textarea
              className="contact-form-text shadow-none"
              placeholder="Description"
              id="instDesc"
              name="instDesc"
              onChange={(e) => setInstDesc(e.target.value)}
              value={instDesc}
            ></textarea>
          </div> */}

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
