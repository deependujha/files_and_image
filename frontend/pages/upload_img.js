import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

function FormFileExample() {
  const [img, setImg] = useState("");

  const imageUploader = (val) => {
    // console.log(val);
    // console.log("printing file name.. huihuihui");
    // console.log(val[0].name);
    setImg(val[0]);
  };

  const btnClick = () => {
    console.log("button clicked");
    const data = new FormData();
    data.append("img", img);

    // Send a POST request
    axios({
      method: "post",
      url: "http://localhost:5000/image",
      data,
      header: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log("image uploaded in backend");
        console.log(response);
        console.log("bye bye");
      })
      .catch((err) => {
        console.log("ho gaya satyanash");
        console.log(err);
      });
  };

  return (
    <div style={{ width: 400, height: 100 }} className="mx-5 my-5">
      <input
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        onChange={(e) => {
          imageUploader(e.target.files);
        }}
      />
      <div>
        {img !== "" ? (
          <Image src={URL.createObjectURL(img)} height="300" width="300px" />
        ) : (
          <></>
        )}
      </div>
      <div>
        <button style={{ backgroundColor: "yellow" }} onClick={btnClick}>
          Save in Backend
        </button>
      </div>
    </div>
  );
}

export default FormFileExample;
