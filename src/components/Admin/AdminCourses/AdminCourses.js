import React, { useState } from "react";
import {} from "./AdminCourses.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const AdminCourses = () => {
  function myFunction() {
    alert("Done!");
  }
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courseIns, setCourseIns] = useState();
  let getCourseIns = (eventcourseIns) => {
    const courseIns = eventcourseIns.target.value;
    setCourseIns(courseIns);
    console.log(courseIns);
  };

  const [fee, setFee] = useState();

  const [classes, setClasses] = useState();
  const [image, setImage] = useState("");
  return (
    <div>
      <div className="container ad py-5">
        <h1 className="my-5 ">Admin Courses</h1>

        <form>
          <label htmlFor="title">Course Title:</label>
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
              placeholder="Course Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          {/* <div className='admin_btn'><Button variant="primary">Post</Button>{' '}</div> */}

          <div className="" onChange={getCourseIns}>
            <label htmlFor="DropdownButton">Instructor:</label>

            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </div>

          <br />
          <label htmlFor="fee">Course Fee:</label>

          <input
            type="number"
            id="fee"
            name="fee"
            onChange={(e) => setFee(e.target.value)}
            value={fee}
          ></input>
          <br />
          <br />
          <label htmlFor="classes">Classes:</label>

          <input
            type="number"
            id="classes"
            name="classes"
            onChange={(e) => setClasses(e.target.value)}
            value={classes}
          ></input>
          <br />
          <br />
          <label htmlFor="image">Select image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <br />
          <br />
          <div className="" onChange={getCourseIns}>
            <label htmlFor="DropdownButton">Category:</label>

            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="admin_btn mt-5">
            <Button onClick={() => myFunction()} variant="primary">
              Post
            </Button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCourses;
