import React, { useEffect } from "react";
import {} from "./Gallery.css";
import lap from "../../images/lapjpg.jpg";
import { fetchPhotos } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

const Gallery = () => {
  const photos = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <div>
      <div className="container gallery py-5">
        <h1>Gallery</h1>
        <div className="down_border mb-lg-5"></div>
        <div className="row p-3">
          <div className="aws zoom  mt-lg-4 col-lg-4">
            <h2>AWS</h2>
            <div>
              <img className="img-fluid" src={lap} alt="" />
            </div>
          </div>

          <div className="python zoom  col-lg-4 mt-4 mb-4 ">
            <h2>Python</h2>

            <div>
              <img className="img-fluid" src={lap} alt="" />
            </div>
          </div>

          <div className="system zoom mt-lg-4 col-lg-4 mb-5">
            <h2>System Design</h2>
            <div>
              <img className="img-fluid" src={lap} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
