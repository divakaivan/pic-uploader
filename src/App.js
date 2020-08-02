import React, { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
