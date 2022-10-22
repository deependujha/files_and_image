import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const fetch_img = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/image", { responseType: "blob" })
      .then(function (response) {
        console.log(response.data);
        setImg(URL.createObjectURL(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>The image is here:</div>
      {img !== "" ? (
        <div>
          <Image src={img} height="300px" width="300px" />
        </div>
      ) : (
        <div>loading image...</div>
      )}
    </div>
  );
};

export default fetch_img;
