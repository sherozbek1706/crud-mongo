const mongoose = require("mongoose");

module.exports = function () {
  return mongoose
    .connect("mongodb+srv://sherozbek:Matematika3sinf@cluster0.zkcn5gv.mongodb.net/users?retryWrites=true&w=majority")
    .then(() => console.log("Databazaga ulandi!"))
    .catch((err) => console.log("Xatolik bor: ", err));
};
