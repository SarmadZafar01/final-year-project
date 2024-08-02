import React, { useRef, useState } from "react";
import NavBar from "../navb";
import "./reg.css";
import upload from "../upload.png";
import Homecard from "../Home/Homecard";
import "../Home/HomeCard.css";

function Imreg() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);

      // Send the selected image to the API
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://127.0.0.1:8000/recommend", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("recomended", data);
          setRecommendations(data.recommended_products);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Invalid file selected. Please select an image file.");
    }
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
              <img src={selectedImage} alt="upload" />
            ) : (
              <>
                <img src={upload} alt="upload" />
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
      <section className="">
        {recommendations.length > 0 && (
          <div className="products-container">
            {recommendations.map((el) => (
              <Homecard
                key={el.id}
                id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                className="product-card"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Imreg;

