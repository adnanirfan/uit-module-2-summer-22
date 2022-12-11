const router = require("express").Router();
const bookController = require("../controllers/book");
// const multer = require("multer");

// img storage
// const imgconfig = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, file, callback) => {
//     callback(null, `image-${Date.now()}. ${file.originalname}`);
//   },
// });

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowed"));
  }
};

// const upload = multer({
//   storage: imgconfig,
//   fileFilter: isImage,
// });

router.post("/", /* upload.single("image"), */ bookController.book_create);
router.get("/", bookController.book_all);
router.get("/:bookId", bookController.book_details);
router.get("/search/:key", bookController.book_search);
router.put("/:bookId", bookController.book_update);
router.delete("/:bookId", bookController.book_delete);

module.exports = router;
