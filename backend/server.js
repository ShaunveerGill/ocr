// server.js
const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');

const app = express();
const port = process.env.PORT || 3001;

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Set up a simple endpoint for file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    const result = await Tesseract.recognize(imageBuffer, 'eng');
    const text = result.data.text;
    // Process the text or save it to a database
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OCR processing failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
