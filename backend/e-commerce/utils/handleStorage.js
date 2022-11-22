const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const pathStorage = `${__dirname}/../images/uploads`; //!ACA SE VAN A GUARDAR LOS ARCHIVOS SUBIDOS
      cb(null, pathStorage); //! CB EN SU PRIMER VARIABLE MANEJA ERRORES Y EN LA SEGUNDA EL DESTINO DE LOS ARCHIVOS
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split(".").pop();
      const filename = `file-${Date.now()}.${ext}`;
      cb(null, filename);
    },
  });
  
  const uploadMiddleware = multer({
    storage,
  });

  module.exports = uploadMiddleware