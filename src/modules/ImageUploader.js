import React, { useState } from "react";

//A Demo for uploading Product along with image

const ImageUploader = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFile = () => {
    console.log("hello world")
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("name", "Rice");
    formData.append("description","Basmathi Rice");
    formData.append("price", "100.00");
   

    fetch("http://localhost:8080/file/uploadProduct", {
        method: 'POST',
        body: formData,
        dataType: "jsonp"
    })
    .then(response => response.text())
    .then(text => {
        console.log(text)
    })
  }

  return (
    <div>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button onClick={ () => handleFile()}>Upload</button>
        </div>
      )}
      {/* <!------> */}
      {
        (selectedImage) && (
          <div>
          This is another div
          </div>
        )
      }
      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default ImageUploader;