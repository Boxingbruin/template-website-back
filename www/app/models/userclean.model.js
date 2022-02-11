const mongoose = require("mongoose");

const UserClean = mongoose.model(
  "UserClean",
  new mongoose.Schema({
    username: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = UserClean;