
const multer = require('multer');

// Use memory storage — file stays in memory, not saved to disk
const storage = multer.memoryStorage();

module.exports = multer({ storage });
