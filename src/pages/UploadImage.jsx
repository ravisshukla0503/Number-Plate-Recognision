/** @format */

import axios from "axios";
import React, { useState } from "react";

const UploadImage = () => {
  const [img, setImg] = useState();
  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };
  const handleClick = async () => {
    const image = await axios.post("http://127.0.0.1:8080/upload-image", {
      data : {
        image : img
      },
      headers : { 'Origin' : 'http://localhost:5173/' }
    });
    console.log(image);
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "gold",
      }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: "500px",
          width: "500px",
          transform: "translate(-50%,-50%)",
          backgroundColor: "pink",
          textAlign: "center",
        }}>
        <h1>Number Plate Recognition</h1>
        <h2>Upload Image</h2>
        <input
          type='file'
          style={{
            width: "150px",
            height: "100px",
          }}
          onChange={handleChange}
        />
        <div>
          <button onClick={handleClick}>Upload Image</button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
