// storage-middleware.js
const multer = require('multer');

// Configure storage logic
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});

// Export middleware to use in routes
module.exports = multer({ storage });
