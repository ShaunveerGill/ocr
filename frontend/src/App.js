// import React, { useState } from 'react';
// import axios from 'axios'; 

// const App = () => {
//   const [selectedImageFile, setSelectedImageFile] = useState(null);

//   const handleImageUpload = async (event) => {
//     const image = event.target.files[0];
//     setSelectedImageFile(image);

//     const formData = new FormData();
//     formData.append('image', image);

//     try {

//     } catch {

//     }
//   };

//   return (
//     <div>
//       <input type="file" id="image_file" accept="image/*" onChange={handleImageUpload} />
//       {selectedImageFile && (
//         <div>
//           <img src={URL.createObjectURL(selectedImageFile)} alt="Selected" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import axios from 'axios';

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
      <input type="file" id="image_file" accept="image/*" onChange={handleImageUpload} />
      {selectedImageFile && (
        <div>
          <img src={URL.createObjectURL(selectedImageFile)} alt="Selected" />
        </div>
      )}
      {ocrResult && (
        <div>
          <h2>OCR Result:</h2>
          <p>{ocrResult}</p>
        </div>
      )}
    </div>
  );
};

export default App;
