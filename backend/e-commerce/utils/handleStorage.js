const multer = require("multer");

const storage = multer.diskStorage({
  fileSize: 2000000,
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../images/uploads`; //!ACA SE VAN A GUARDAR LOS ARCHIVOS SUBIDOS
    cb(null, pathStorage); //! CB EN SU PRIMER VARIABLE MANEJA ERRORES Y EN LA SEGUNDA EL DESTINO DE LOS ARCHIVOS
  },
  filename: function (req, file, cb) {
    const isImage = file.mimetype.startsWith("image/");
    if (isImage) {
      const ext = file.originalname.split(".").pop();
      const filename = `file-${Date.now()}.${ext}`;
      cb(null, filename);
    } else {
      cb("Formato de archivo incorrecto");
    }
  },
});

const uploadMiddleware = multer({
  storage,
});

module.exports = uploadMiddleware;
