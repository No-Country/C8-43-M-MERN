const multer = require("multer");

module.exports = multer({
  fileSize: 2000000,
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const isImage = file.mimetype.startsWith("image/");
    if (!isImage) {
      cb(("Formato de imagen incorrecto"), false);
      return;
    }
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});