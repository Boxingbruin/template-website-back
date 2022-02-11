const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    group: String,
    title: String,
    content: String,
    activeusers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserClean"
        }
      ]

  })
);

module.exports = Item;