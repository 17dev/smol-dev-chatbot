const express = require('express');
const router = express.Router();
const multer = require('multer');
const File = require('../models/file');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({storage: storage});

router.post('/uploadFile', upload.single('file'), (req, res, next) => {
  const file = new File({
    name: req.file.filename,
    path: req.file.path
  });

  file.save()
    .then(result => {
      res.status(201).json({
        message: "File uploaded successfully",
        file: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get('/files', (req, res, next) => {
  File.find()
    .then(files => {
      res.status(200).json({
        message: "Files retrieved successfully",
        files: files
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.delete('/deleteFile/:fileId', (req, res, next) => {
  File.remove({_id: req.params.fileId})
    .then(result => {
      res.status(200).json({
        message: "File deleted successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;