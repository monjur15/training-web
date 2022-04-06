import React, { useEffect, useState } from "react";
import {} from "./AdminCourses.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInstructors,
  fetchCategories,
  createCourse,
} from "../../../store/action";
import swal from "sweetalert";

const AdminCourses = () => {
  let dispatch = useDispatch();

  const instructors = useSelector((state) => state.instructors);
  const categories = useSelector((state) => state.categories);

  function myFunction() {
    alert("Done!");
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [instructor, setInstructor] = useState(null);
  const [category, setCategory] = useState(null);

  const [fee, setFee] = useState("");

  const [classes, setClasses] = useState("");
  const [content, setContent] = useState("");
  const [credits, setCredits] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(fetchInstructors());
    dispatch(fetchCategories());
  }, []);

  function onAddCourse() {
    let courseData = new FormData();
    courseData.append("course_title", title);
    courseData.append("course_desc", description);
    courseData.append("course_content", content);
    courseData.append("course_classes", classes);
    courseData.append("course_credit", credits);
    courseData.append("course_fee", fee);
    courseData.append("course_img", image);
    courseData.append("cat_id", category);
    courseData.append("inst_id", instructor);

    console.log(
      title +
        "," +
        description +
        "," +
        content +
        "," +
        classes +
        "," +
        credits +
        "," +
        fee +
        "," +
        image +
        "," +
        category +
        "," +
        instructor
    );

    dispatch(createCourse(courseData));
    swal({
      text: "Course Added!",
      type: "success",
      timer: 2000,
    });

    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  return (
    <div>
      <div className="container ad py-5">
        <h1 className="my-5 ">Admin Courses</h1>

        <form>
          <label htmlFor="title" className="mr-2">
            Course Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border-2 border-blue-200 focus:outline-none w-96"
          ></input>
          <br />
          <br />
          <label htmlFor="Instructor" className="mb-1">
            Instructor:
          </label>
          <select
            onChange={(e) => setInstructor(e.target.value)}
            name="instructor"
            id="instructor"
            required
            className="
                bg-white
                rounded-md
                px-8
                py-2
                flex
                justify-center
                w-fit
                border-2 border-blue-300
                hover:border-navlink hover:ring-0
                focus:outline-none focus:border-navlink
              "
          >
            <option defaultValue value="null">
              Select Instructor
            </option>
            {instructors && instructors.length
              ? instructors.map((instructor) => (
                  <option value={instructor.inst_id} key={instructor.inst_id}>
                    {instructor.inst_name}
                  </option>
                ))
              : null}
          </select>
          <br />

          <label htmlFor="Category" className="mb-1">
            Category:
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            id="category"
            required
            className="
                bg-white
                rounded-md
                px-8
                py-2
                flex
                justify-center
                w-fit
                border-2 border-blue-300
                hover:border-navlink hover:ring-0
                focus:outline-none focus:border-navlink
              "
          >
            <option defaultValue value="null">
              Select Category
            </option>
            {categories && categories.length
              ? categories.map((category) => (
                  <option value={category.cat_id} key={category.cat_id}>
                    {category.category}
                  </option>
                ))
              : null}
          </select>

          <label htmlFor="description" className="mb-1 mt-2">
            Description:
          </label>
          <div className="w-90">
            <textarea
              className="border-2 border-blue-200 focus:outline-none w-800 h-400 p-4 mb-4"
              placeholder="Course Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          {/* <div className='admin_btn'><Button variant="primary">Post</Button>{' '}</div> */}
          {/* <div className="" onChange={getCourseIns}> */}
          <label htmlFor="fee" className="mr-2">
            Course Fee:
          </label>
          <input
            type="number"
            id="fee"
            name="fee"
            onChange={(e) => setFee(e.target.value)}
            value={fee}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>
          <br />
          <br />
          <label htmlFor="classes" className="mr-2">
            Classes:
          </label>
          <input
            type="number"
            id="classes"
            name="classes"
            onChange={(e) => setClasses(e.target.value)}
            value={classes}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>
          <br />
          <br />
          <label htmlFor="content" className="mr-2">
            Content:
          </label>
          <input
            type="text"
            id="content"
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="border-2 border-blue-200 focus:outline-none w-96"
          ></input>
          <br />
          <br />
          <label htmlFor="credits" className="mr-2">
            Credits:
          </label>
          <input
            type="number"
            id="credits"
            name="credits"
            onChange={(e) => setCredits(e.target.value)}
            value={credits}
            className="border-2 border-blue-200 focus:outline-none"
          ></input>
          <br />
          <br />
          <label htmlFor="image">Select image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <div className="admin_btn mt-5">
            <Button onClick={() => onAddCourse()} variant="primary">
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCourses;
