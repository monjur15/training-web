import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createCategory } from "../../../store/action";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const AdminCategory = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [catImg, setCatImg] = useState(null);

  function onCreateCategory() {
    let data = new FormData();
    // category = { category: category };
    data.append("category", category);
    data.append("cat_img", catImg);
    dispatch(createCategory(data));

    swal({
      text: "Category Added!",
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
        <h1 className="py-5">Admin Category</h1>
        <label htmlFor="category" className="mr-2">
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border-2 border-blue-200 focus:outline-none"
        ></input>

        <br />
        <br />

        <label htmlFor="img">Select image:</label>
        <input type="file" onChange={(e) => setCatImg(e.target.files[0])} />

        <div className=" mt-8">
          <Button onClick={() => onCreateCategory()} variant="primary">
            Post
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
