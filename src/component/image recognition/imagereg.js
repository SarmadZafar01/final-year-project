import React, { useRef, useState } from "react";
import NavBar from "../navb";
import "./reg.css";
import upload from "../upload.png";

function Imreg() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const imageURL = URL.createObjectURL(selectedFile);
    setSelectedImage(imageURL);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <NavBar />

      <div className="box7">
        <div className="box8">
          <div className="box9" onClick={handleImageClick}>
            {selectedImage ? (
              <img src={selectedImage} alt="upload"></img>
            ) : (
              <>
                <img src={upload} alt="upload"></img>
                <div className="box10">Drop Your Image</div>
              </>
            )}
          </div>
          <div className="box11">
            <button onClick={handleUploadButtonClick}>Upload Image</button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imreg;
