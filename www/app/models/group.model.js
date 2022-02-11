const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
    name: String,
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserClean"
      }
    ]
  });

const Group = module.exports = mongoose.model('Group', GroupSchema);

module.exports.getAllGroups = function (callback)
{
    Group.find(callback);
}