import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, path.resolve("public/temp"));
  },
  filename: function (req, files, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, files.fieldname + "-" + uniqueSuffix);
  },
});
export const upload = multer({ storage });
