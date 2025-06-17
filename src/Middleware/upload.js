import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // ✅ Accept the image
    } else {
      cb(new Error('Only image files are allowed!'), false); // ❌ Reject non-image
    }
  }
});

export { upload };
