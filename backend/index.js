const express = require('express');
const multer = require('multer');
const {spawn} = require('child_process');
const cors = require('cors');

const app = express()
const port = 3001
const upload = multer({ dest: 'uploads/' });
app.use(cors());

app.post('/ocr', upload.single('image'), (req, res) => {

    const uploadedFile = req.file; 
    const pythonProcess = spawn('python', ['ocr.py', uploadedFile.path]);

    pythonProcess.stdout.on('data', (data) => {
        const ocrResult = data.toString(); 
        res.json({ ocrResult });
      });
    
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
        res.status(500).json({ error: 'OCR process failed' });
    });
    
    pythonProcess.on('close', (code) => {
        console.log(`Python Script exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});