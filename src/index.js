const express = require("express");
const multer = require("multer");

require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Configuring multer
const upload = multer({
  // dest: "avatars",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // if (file.originalname.match(/\.(doc|docx)$/)) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);

    // cb(new Error("File must be a PDF"));
    // cb(undefined, true)
  },
});

const errorMiddleware = (error, req, res, next) => {
  res.status(400).send({ error: error.message });
};

app.use(upload.single("avatar"));

// Configuring express
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

// let done = true;

// const isItDoneYet = () =>
//   new Promise((resolve, reject) => {
//     if (done) {
//       const workDone = "Here is the thing I built";
//       resolve(workDone);
//       console.log("Done");
//     } else {
//       const why = "Still working on something else";
//       reject(why);
//     }
//   });
