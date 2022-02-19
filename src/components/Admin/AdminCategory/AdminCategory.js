import React, { useState } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const AdminCategory = () => {
  const [category, setCategory] = useState("");

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
      </div>
    </div>
  );
};

export default AdminCategory;
