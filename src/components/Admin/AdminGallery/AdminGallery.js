import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const AdminGallery = () => {
  function myFunction() {
    alert("Done!");
  }

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div className="container py-5">
        <h1 className="my-5">Admin Gallery</h1>

        <form>
          <label htmlFor="image">Select image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <div className="w-90">
            <textarea
              className="contact-form-text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="admin_btn">
            <Button onClick={() => myFunction()} variant="primary">
              Post
            </Button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminGallery;
