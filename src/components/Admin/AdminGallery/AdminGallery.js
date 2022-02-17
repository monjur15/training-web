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

  const [galleryImg, setGalleryImg] = useState("");
  let getGalleryImg = (eventGalleryImg) => {
    const galleryImg = eventGalleryImg.target.value;
    setGalleryImg(galleryImg);
    console.log(galleryImg);
  };
  const [galleryDes, setGalleryDes] = useState("");
  let getGalleryDes = (eventGalleryDes) => {
    const galleryDes = eventGalleryDes.target.value;
    setGalleryDes(galleryDes);
    console.log(galleryDes);
  };

  const [photo, setPhoto] = useState(0);

  return (
    <div>
      <div className="container py-5">
        <h1 className="my-5">Admin Gallery</h1>

        <form>
          <label for="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={getGalleryImg}
          ></input>

          <div className="w-90">
            <textarea
              class="contact-form-text"
              placeholder="Description"
              onChange={getGalleryDes}
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
