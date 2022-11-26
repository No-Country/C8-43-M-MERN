const jimp = require("jimp");

const resize = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  const photo = await jimp.read(req.file.path);
  await photo.resize(1024, jimp.AUTO);
  await photo.write(`${__dirname}/../images/uploads/${req.file.filename}`);

  next();
};

module.exports = resize;
