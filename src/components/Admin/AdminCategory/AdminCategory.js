import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createCategory } from "../../../store/action";
import { useDispatch } from "react-redux";

const AdminCategory = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  function onCreateCategory() {
    let category = {};
    category = { category: category };
    dispatch(createCategory(category));
    alert("Done");
  }

  return (
    <div>
      <div className="container py-5">
        <h1 className="py-5">Admin Category</h1>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        ></input>

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
