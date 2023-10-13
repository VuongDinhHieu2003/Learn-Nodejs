const mygroup = require('../models/mygroup');

const getIndex = (req, res) => {
  const groupData = mygroup.getAll();
  res.json(groupData);
};

module.exports = {
  getIndex,
};
