import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const image = event.target.files[0];
    setSelectedImageFile(image);
    setOcrResult(null);
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // You can use this effect for additional actions when ocrResult changes.
    // For example, triggering another API call or updating the UI.
  }, [ocrResult]);

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white border-b border-gray-300">
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
              <img className="h-14 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/ShaunveerGill" className="text-xl font-semibold leading-6 text-gray-900">GitHub</a>
            <a href="https://www.linkedin.com/in/shaunveer-gill-191582265/" className="text-xl font-semibold leading-6 text-gray-900">LinkedIn</a>
          </div>
        </nav>
      </header>
      <div className="grid grid-cols-2 gap-3">
        <label htmlFor="image_file" className="col-span-1 h-96 border rounded p-4 cursor-pointer bg-gray-200 flex flex-col items-center justify-center">
          <input
            type="file"
            id="image_file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
          </svg>
          <p className="text-sm">Click to upload</p>
        </label>

        <div className="col-span-1 h-96 border rounded p-4">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              {ocrResult ? (
                <div>
                  <p className="mt-2">{ocrResult}</p>
                </div>
              ) : (
                <p className="text-gray-600">Upload an image to start processing</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;



