const mongoose = require("mongoose");

module.exports = function () {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/users")
    .then(() => console.log("Databazaga ulandi!"))
    .catch((err) => console.log("Xatolik bor: ", err));
};
