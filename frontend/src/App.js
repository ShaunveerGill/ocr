import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);

  const handleImageUpload = async (event) => {
    const image = event.target.files[0];
    setSelectedImageFile(image);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3001/ocr', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('OCR Result:', response.data.ocrResult);
      setOcrResult(response.data.ocrResult);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
        <nav className="bg-blue-800 text-white p-4 w-full">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <p className="text-xl font-bold">Your OCR Project</p>

          <div>
            <a href="https://github.com/ShaunveerGill" className="text-white mr-4">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shaunveer-gill-191582265/" className="text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
      <div className="mr-4">
          <input type="file" id="image_file" accept="image/*" onChange={handleImageUpload} />
          {selectedImageFile && (
            <div className="mt-4">
              <img src={URL.createObjectURL(selectedImageFile)} alt="Selected" className="max-w-full" />
            </div>
          )}
        </div>

        <div>
          {ocrResult && (
            <div>
              <h2 className="text-2xl font-bold">OCR Result:</h2>
              <p className="mt-2">{ocrResult}</p>
            </div>
          )}
        </div>
    </div>
  );
};

export default App;