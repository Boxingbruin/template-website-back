const db = require("../app/models");

const Group = db.group;


exports.allAccess = (req, res) => {
  Group.getAllGroups ((err, groups) =>
  {
      if (err) throw err;

      if (!groups)
          return res.json({ success: false, msg: 'Groups not found' });

      res.status(200).json(groups);
  });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};