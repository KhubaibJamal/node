// // storage-middleware.js SAVE IMAGE LOCALLY
// const multer = require('multer');

// // Configure storage logic
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + file.originalname;
//         cb(null, uniqueSuffix);
//     }
// });

// // Export middleware to use in routes
// module.exports = multer({ storage });



const multer = require('multer');

// Use memory storage — file stays in memory, not saved to disk
const storage = multer.memoryStorage();

module.exports = multer({ storage });
