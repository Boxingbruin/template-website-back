const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.userclean = require("./userclean.model");
db.user = require("./user.model");
db.role = require("./role.model");
db.group = require("./group.model");
db.item = require("./item.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;